import React from 'react';
import { trustedOrganizations } from '../data/siteContent';

function DonatePage() {
  return (
    <div className="page-shell page-interior">
      <section className="page-hero">
        <div className="section-kicker">Donate and Support</div>
        <h1>Give through trusted organizations working directly with survivors and families.</h1>
        <p className="page-intro">
          Voice for Her is designed to guide donors, not redirect them away from
          credible aid networks. Each link below goes to an official
          organization site so visitors can donate directly.
        </p>
        <p className="page-intro">
          Choose one of the organizations below to continue to its official
          donation or support page.
        </p>
      </section>

      <section className="section-block organizations-grid">
        {trustedOrganizations.map((organization) => (
          <article className="organization-card" key={organization.name}>
            <h2>{organization.name}</h2>
            <p>{organization.focus}</p>
            <a href={organization.url} target="_blank" rel="noopener noreferrer">
              {organization.cta}
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}

export default DonatePage;
