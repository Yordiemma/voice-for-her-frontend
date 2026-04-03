import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import { fetchGlobalAbuseData } from '../utils/globalAbuseData';

const geoUrl =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const legendSteps = [
  { label: 'No data', color: '#e4e7ea' },
  { label: 'Low', color: '#f0cbb8' },
  { label: 'Medium', color: '#e89a78' },
  { label: 'High', color: '#c74f3d' },
  { label: 'Very high', color: '#8d2d23' }
];

function formatPercent(value) {
  return Number.isFinite(value) ? `${value.toFixed(1)}%` : 'No data available yet';
}

function getCountryValue(country) {
  if (!country) return null;
  if (Number.isFinite(country.totalReports)) return country.totalReports;
  if (Number.isFinite(country.womenRelatedCases)) return country.womenRelatedCases;
  if (Number.isFinite(country.childrenRelatedCases)) return country.childrenRelatedCases;
  return null;
}

function getFillColor(value) {
  if (!Number.isFinite(value)) return '#e4e7ea';
  if (value < 15) return '#f0cbb8';
  if (value < 30) return '#e89a78';
  if (value < 45) return '#c74f3d';
  return '#8d2d23';
}

function SummaryCard({ label, value, hint }) {
  return (
    <article className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{hint}</p>
    </article>
  );
}

function CountryDetailPanel({ country }) {
  if (!country) {
    return (
      <aside className="country-detail-card">
        <h3>Select a country</h3>
        <p>
          Hover over or click a country on the map to see available public
          statistics.
        </p>
      </aside>
    );
  }

  const trendText = country.womenTrend
    ? `${country.womenTrend.direction === 'up' ? 'Increasing' : country.womenTrend.direction === 'down' ? 'Decreasing' : 'Stable'} for women-related data`
    : country.childrenTrend
      ? `${country.childrenTrend.direction === 'up' ? 'Increasing' : country.childrenTrend.direction === 'down' ? 'Decreasing' : 'Stable'} for children-related data`
      : 'No comparison available yet';

  return (
    <aside className="country-detail-card">
      <div className="section-kicker">Country Detail</div>
      <h3>{country.countryName}</h3>

      <div className="country-detail-list">
        <div className="country-detail-row">
          <span>Total tracked value</span>
          <strong>
            {Number.isFinite(country.totalReports)
              ? country.totalReports.toFixed(1)
              : 'No data available yet'}
          </strong>
        </div>
        <div className="country-detail-row">
          <span>Women-related cases</span>
          <strong>{formatPercent(country.womenRelatedCases)}</strong>
        </div>
        <div className="country-detail-row">
          <span>Children-related cases</span>
          <strong>{formatPercent(country.childrenRelatedCases)}</strong>
        </div>
      </div>

      <div className="country-detail-meta">
        <p>
          <strong>Types of abuse:</strong> {country.abuseTypes.join(', ')}
        </p>
        <p>
          <strong>Women data year:</strong> {country.womenYear || 'Not available'}
        </p>
        <p>
          <strong>Children data year:</strong> {country.childrenYear || 'Not available'}
        </p>
        <p>
          <strong>Trend:</strong> {trendText}
        </p>
      </div>
    </aside>
  );
}

function GlobalAbuseMapSection() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState({ loading: true, error: '' });
  const [activeCountry, setActiveCountry] = useState(null);

  useEffect(() => {
    let mounted = true;

    fetchGlobalAbuseData()
      .then((result) => {
        if (!mounted) return;
        setData(result);
        setActiveCountry(result.countries.find((country) =>
          Number.isFinite(country.totalReports)
        ) || result.countries[0] || null);
        setStatus({ loading: false, error: '' });
      })
      .catch((error) => {
        if (!mounted) return;
        setStatus({
          loading: false,
          error: error.message || 'Unable to load global abuse data.'
        });
      });

    return () => {
      mounted = false;
    };
  }, []);

  const countryLookup = new Map(
    (data?.countries || []).map((country) => [country.countryName, country])
  );

  return (
    <section className="section-block global-map-section">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker">Global Abuse Data</div>
          <h2>Worldwide abuse insights</h2>
        </div>
        <p className="section-lead">
          This section uses free public country-level data so the platform can
          show abuse statistics affecting women and children across the world.
        </p>
      </div>

      {status.loading && (
        <div className="empty-state">
          <h3>Loading global data</h3>
          <p>Fetching worldwide indicators from the public API.</p>
        </div>
      )}

      {!status.loading && status.error && (
        <div className="empty-state">
          <h3>Global data unavailable</h3>
          <p>{status.error}</p>
          <p>No data available yet.</p>
        </div>
      )}

      {!status.loading && !status.error && data && (
        <>
          <div className="metrics-grid">
            <SummaryCard
              label="Countries with data"
              value={data.summary.countriesTracked || 0}
              hint="Countries or regions with public indicators available"
            />
            <SummaryCard
              label="Women-related average"
              value={
                Number.isFinite(data.summary.womenAverage)
                  ? `${data.summary.womenAverage}%`
                  : 'N/A'
              }
              hint="Average for women-related abuse indicator"
            />
            <SummaryCard
              label="Children-related average"
              value={
                Number.isFinite(data.summary.childrenAverage)
                  ? `${data.summary.childrenAverage}%`
                  : 'N/A'
              }
              hint="Average for children-related abuse indicator"
            />
          </div>

          <div className="map-layout">
            <div className="map-card">
              <div className="map-card-top">
                <h3>Abuse reports around the world</h3>
                <div className="map-legend" aria-label="Map legend">
                  {legendSteps.map((step) => (
                    <div className="legend-item" key={step.label}>
                      <span
                        className="legend-swatch"
                        style={{ backgroundColor: step.color }}
                      />
                      <small>{step.label}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className="map-shell">
                <ComposableMap projectionConfig={{ scale: 150 }}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const geoName =
                          geo.properties?.name ||
                          geo.properties?.NAME ||
                          geo.properties?.ADMIN ||
                          '';
                        const match = countryLookup.get(geoName);
                        const value = getCountryValue(match);

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                              if (match) setActiveCountry(match);
                            }}
                            onFocus={() => {
                              if (match) setActiveCountry(match);
                            }}
                            onClick={() => {
                              setActiveCountry(
                                match || {
                                  countryName: geoName,
                                  totalReports: null,
                                  womenRelatedCases: null,
                                  childrenRelatedCases: null,
                                  womenYear: null,
                                  childrenYear: null,
                                  womenTrend: null,
                                  childrenTrend: null,
                                  abuseTypes: ['No data available yet']
                                }
                              );
                            }}
                            style={{
                              default: {
                                fill: getFillColor(value),
                                stroke: '#ffffff',
                                strokeWidth: 0.5,
                                outline: 'none'
                              },
                              hover: {
                                fill: '#173042',
                                stroke: '#ffffff',
                                strokeWidth: 0.8,
                                outline: 'none'
                              },
                              pressed: {
                                fill: '#8d2d23',
                                stroke: '#ffffff',
                                strokeWidth: 0.8,
                                outline: 'none'
                              }
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>
              </div>
            </div>

            <CountryDetailPanel country={activeCountry} />
          </div>
        </>
      )}
    </section>
  );
}

export default GlobalAbuseMapSection;
