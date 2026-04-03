const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://voiceforher-backend.onrender.com');

export function getApiBaseUrl() {
  return API_BASE_URL;
}

function normalizeReportCollection(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.reports)) {
    return payload.reports;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  return null;
}

function groupCount(items, keyGetter) {
  return items.reduce((accumulator, item) => {
    const key = keyGetter(item);

    if (!key) {
      return accumulator;
    }

    accumulator[key] = (accumulator[key] || 0) + 1;
    return accumulator;
  }, {});
}

function sortGroups(grouped, limit = 5) {
  return Object.entries(grouped)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit);
}

export function summarizeReports(reports) {
  const safeReports = Array.isArray(reports) ? reports : [];

  const ageBands = {
    'Under 13': 0,
    '13-17': 0,
    '18-24': 0,
    '25-39': 0,
    '40+': 0
  };

  safeReports.forEach((report) => {
    const age = Number(report?.age);

    if (!Number.isFinite(age)) {
      return;
    }

    if (age < 13) ageBands['Under 13'] += 1;
    else if (age < 18) ageBands['13-17'] += 1;
    else if (age < 25) ageBands['18-24'] += 1;
    else if (age < 40) ageBands['25-39'] += 1;
    else ageBands['40+'] += 1;
  });

  const abuseTypes = groupCount(
    safeReports,
    (report) => report?.abuseType?.toString().trim() || 'Unspecified'
  );
  const countries = groupCount(
    safeReports,
    (report) => report?.country?.toString().trim() || 'Unspecified'
  );

  const anonymousCount = safeReports.filter(
    (report) => !report?.contactInfo || !String(report.contactInfo).trim()
  ).length;

  return {
    totalReports: safeReports.length,
    countriesRepresented: Object.keys(countries).length,
    anonymousShare:
      safeReports.length > 0
        ? Math.round((anonymousCount / safeReports.length) * 100)
        : 0,
    abuseTypeData: sortGroups(abuseTypes, 6),
    countryData: sortGroups(countries, 6),
    ageData: Object.entries(ageBands).map(([name, value]) => ({ name, value }))
  };
}

export async function fetchReportSummary() {
  const response = await fetch(`${API_BASE_URL}/reports`);
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload?.error || 'Unable to load report data.');
  }

  const collection = normalizeReportCollection(payload);

  if (collection) {
    return summarizeReports(collection);
  }

  if (payload?.summary) {
    return payload.summary;
  }

  if (
    typeof payload?.totalReports === 'number' &&
    Array.isArray(payload?.abuseTypeData)
  ) {
    return payload;
  }

  throw new Error('The reports API returned an unsupported data format.');
}

export async function submitReport(report) {
  const response = await fetch(`${API_BASE_URL}/reports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(report)
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload?.error || 'Failed to submit report.');
  }

  return payload;
}
