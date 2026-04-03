const WORLD_BANK_API = 'https://api.worldbank.org/v2/country/all/indicator';
const WOMEN_INDICATOR = 'SG.VAW.IPVE.ZS';
const CHILDREN_INDICATOR = 'SP.M18.2024.FE.ZS';

const countryAliases = {
  'Bahamas, The': 'Bahamas',
  'Congo, Dem. Rep.': 'Democratic Republic of the Congo',
  'Congo, Rep.': 'Republic of the Congo',
  'Czechia': 'Czech Republic',
  'Egypt, Arab Rep.': 'Egypt',
  'Gambia, The': 'Gambia',
  'Hong Kong SAR, China': 'Hong Kong',
  'Iran, Islamic Rep.': 'Iran',
  'Korea, Dem. People’s Rep.': 'North Korea',
  'Korea, Rep.': 'South Korea',
  'Kyrgyz Republic': 'Kyrgyzstan',
  'Lao PDR': 'Laos',
  'Macao SAR, China': 'Macau',
  'Russian Federation': 'Russia',
  'Slovak Republic': 'Slovakia',
  'Syrian Arab Republic': 'Syria',
  'Turkiye': 'Turkey',
  'Venezuela, RB': 'Venezuela',
  'West Bank and Gaza': 'Palestine',
  'Yemen, Rep.': 'Yemen',
  'United States': 'United States of America'
};

function normalizeCountryName(name) {
  if (!name) return '';
  return countryAliases[name] || name;
}

function formatTrend(currentValue, previousValue) {
  if (!Number.isFinite(currentValue) || !Number.isFinite(previousValue)) {
    return null;
  }

  const delta = Number((currentValue - previousValue).toFixed(1));

  if (delta === 0) {
    return { direction: 'flat', delta };
  }

  return {
    direction: delta > 0 ? 'up' : 'down',
    delta
  };
}

function buildMetricEntries(records) {
  const grouped = new Map();

  records.forEach((record) => {
    if (!record?.country?.value || record.country.value === 'Aggregates') {
      return;
    }

    if (record.value === null || record.value === undefined) {
      return;
    }

    const countryName = normalizeCountryName(record.country.value);
    const current = grouped.get(countryName) || { latest: null, previous: null };
    const value = Number(record.value);

    if (!Number.isFinite(value)) {
      return;
    }

    if (!current.latest) {
      current.latest = { value, year: record.date };
      grouped.set(countryName, current);
      return;
    }

    if (!current.previous) {
      current.previous = { value, year: record.date };
      grouped.set(countryName, current);
    }
  });

  return grouped;
}

async function fetchIndicator(indicatorCode) {
  const response = await fetch(
    `${WORLD_BANK_API}/${indicatorCode}?format=json&per_page=20000`
  );
  const payload = await response.json();

  if (!response.ok || !Array.isArray(payload?.[1])) {
    throw new Error('Unable to load global abuse data from the public API.');
  }

  return buildMetricEntries(payload[1]);
}

function average(values) {
  const valid = values.filter((value) => Number.isFinite(value));

  if (!valid.length) {
    return null;
  }

  return Number(
    (valid.reduce((sum, value) => sum + value, 0) / valid.length).toFixed(1)
  );
}

export async function fetchGlobalAbuseData() {
  const [womenData, childrenData] = await Promise.all([
    fetchIndicator(WOMEN_INDICATOR),
    fetchIndicator(CHILDREN_INDICATOR)
  ]);

  const allCountries = new Set([...womenData.keys(), ...childrenData.keys()]);

  const countries = Array.from(allCountries).map((countryName) => {
    const women = womenData.get(countryName);
    const children = childrenData.get(countryName);

    const womenValue = women?.latest?.value ?? null;
    const childrenValue = children?.latest?.value ?? null;
    const trackedValues = [womenValue, childrenValue].filter((value) =>
      Number.isFinite(value)
    );

    return {
      countryName,
      totalReports: trackedValues.length
        ? Number(trackedValues.reduce((sum, value) => sum + value, 0).toFixed(1))
        : null,
      womenRelatedCases: womenValue,
      childrenRelatedCases: childrenValue,
      womenYear: women?.latest?.year ?? null,
      childrenYear: children?.latest?.year ?? null,
      womenTrend: formatTrend(womenValue, women?.previous?.value),
      childrenTrend: formatTrend(childrenValue, children?.previous?.value),
      abuseTypes: [
        'Intimate partner violence against women',
        'Girls married before age 18'
      ]
    };
  });

  const countriesWithData = countries.filter(
    (country) =>
      Number.isFinite(country.womenRelatedCases) ||
      Number.isFinite(country.childrenRelatedCases)
  );

  const highestCountry = [...countriesWithData]
    .filter((country) => Number.isFinite(country.totalReports))
    .sort((a, b) => (b.totalReports || 0) - (a.totalReports || 0))[0];

  return {
    summary: {
      countriesTracked: countriesWithData.length,
      womenAverage: average(
        countriesWithData.map((country) => country.womenRelatedCases)
      ),
      childrenAverage: average(
        countriesWithData.map((country) => country.childrenRelatedCases)
      ),
      highestCountry
    },
    countries
  };
}
