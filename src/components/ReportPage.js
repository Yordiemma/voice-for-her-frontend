import React from 'react';
import ReportForm from './ReportForm';

function ReportPage() {
  return (
    <div className="page-shell page-interior">
      <section className="page-hero">
        <div className="section-kicker">Report Abuse</div>
        <h1>Report abuse with or without identifying yourself.</h1>
        <p className="page-intro">
          This reporting flow is designed to be simple, accessible, and
          survivor-aware. No account is required. If you prefer, you can submit
          the report anonymously by leaving contact details out.
        </p>
      </section>

      <section className="section-block split-section report-page-layout">
        <div className="split-copy">
          <h2>Before you submit</h2>
          <ul className="feature-list">
            <li>Use anonymous mode if sharing contact information feels unsafe</li>
            <li>Keep the report factual and avoid identifying private details</li>
            <li>Use the Help page if you need support pathways and resource links</li>
            <li>The homepage charts are designed to reflect report trends over time</li>
          </ul>
        </div>

        <ReportForm />
      </section>
    </div>
  );
}

export default ReportPage;
