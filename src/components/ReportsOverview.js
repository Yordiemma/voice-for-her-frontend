import React, { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { fetchReportSummary } from '../utils/api';

const chartColors = ['#c74f3d', '#df7c58', '#f0a66a', '#46708e', '#24475e', '#7aa7a3'];

function MetricCard({ label, value, hint }) {
  return (
    <article className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{hint}</p>
    </article>
  );
}

function ReportsOverview() {
  const [summary, setSummary] = useState(null);
  const [status, setStatus] = useState({ loading: true, error: '' });

  useEffect(() => {
    let mounted = true;

    fetchReportSummary()
      .then((result) => {
        if (!mounted) return;
        setSummary(result);
        setStatus({ loading: false, error: '' });
      })
      .catch((error) => {
        if (!mounted) return;
        setStatus({
          loading: false,
          error: error.message || 'Unable to load report analytics right now.'
        });
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="section-block analytics-section">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker">Data Visualization</div>
          <h2>What the reports are revealing</h2>
        </div>
        <p className="section-lead">
          These charts help make abuse patterns harder to ignore by showing the
          scale, location, and forms of violence reported on the platform.
        </p>
      </div>

      {status.loading && (
        <div className="empty-state">
          <h3>Loading report data</h3>
          <p>Fetching the latest public report statistics from the API.</p>
        </div>
      )}

      {!status.loading && status.error && (
        <div className="empty-state">
          <h3>Report analytics unavailable</h3>
          <p>{status.error}</p>
          <p>
            The chart section is live and ready, but the API needs to expose
            readable report data for homepage statistics.
          </p>
        </div>
      )}

      {!status.loading && !status.error && summary && (
        <>
          <div className="metrics-grid">
            <MetricCard
              label="Total reports"
              value={summary.totalReports ?? 0}
              hint="Reported cases currently represented in the public data view"
            />
            <MetricCard
              label="Countries or regions"
              value={summary.countriesRepresented ?? 0}
              hint="Places represented across the reports received"
            />
            <MetricCard
              label="Anonymous submissions"
              value={`${summary.anonymousShare ?? 0}%`}
              hint="Share of reports submitted without personal contact details"
            />
          </div>

          <div className="charts-grid">
            <article className="chart-card">
              <h3>Reports by abuse type</h3>
              <div className="chart-frame">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={summary.abuseTypeData || []}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d8e1e4" />
                    <XAxis dataKey="name" tick={{ fill: '#173042', fontSize: 12 }} />
                    <YAxis allowDecimals={false} tick={{ fill: '#173042', fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                      {(summary.abuseTypeData || []).map((entry, index) => (
                        <Cell
                          key={`${entry.name}-${index}`}
                          fill={chartColors[index % chartColors.length]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </article>

            <article className="chart-card">
              <h3>Age groups represented in reports</h3>
              <div className="chart-frame">
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={summary.ageData || []}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={60}
                      outerRadius={95}
                      paddingAngle={2}
                    >
                      {(summary.ageData || []).map((entry, index) => (
                        <Cell
                          key={`${entry.name}-${index}`}
                          fill={chartColors[index % chartColors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </article>
            <article className="chart-card">
              <h3>Top countries by reports</h3>
              <div className="chart-frame">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart
                    data={summary.countryData || []}
                    layout="vertical"
                    margin={{ top: 8, right: 10, left: 10, bottom: 8 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#d8e1e4" />
                    <XAxis type="number" allowDecimals={false} tick={{ fill: '#173042', fontSize: 12 }} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      width={100}
                      tick={{ fill: '#173042', fontSize: 12 }}
                    />
                    <Tooltip />
                    <Bar dataKey="value" radius={[0, 10, 10, 0]}>
                      {(summary.countryData || []).map((entry, index) => (
                        <Cell
                          key={`${entry.name}-${index}`}
                          fill={chartColors[index % chartColors.length]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </article>
          </div>

          <article className="table-card">
            <div className="table-card-heading">
              <h3>Country ranking summary</h3>
              <p>
                This ranking shows where the highest number of reports are being recorded.
              </p>
            </div>
            <div className="country-list">
              {(summary.countryData || []).map((item, index) => (
                <div className="country-row" key={`${item.name}-${index}`}>
                  <span>{item.name}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </article>
        </>
      )}
    </section>
  );
}

export default ReportsOverview;
