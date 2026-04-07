import React from 'react';
import { Link } from 'react-router-dom';
import {
  contactChannels,
  supportResources,
  trustedOrganizations
} from '../data/siteContent';

function Help() {
  return (
    <div className="page-shell page-interior">
      <section className="page-hero">
        <div className="section-kicker">Contact and Help Resources</div>
        <h1>Support pathways should be clear, calm, and easy to reach.</h1>
        <p className="page-intro">
          Voice for Her is not a replacement for emergency services. If someone
          is in immediate danger, contact local emergency responders or a nearby
          crisis resource right away.
        </p>
      </section>

      <section className="section-block three-column-grid">
        {supportResources.map((resource) => (
          <article className="content-card" key={resource.title}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </article>
        ))}
      </section>

      <section className="section-block two-column-layout">
        <article className="content-card">
          <div className="section-kicker">Contact</div>
          <h2>Reach the platform team</h2>
          <div className="contact-list">
            {contactChannels.map((channel) => (
              <div className="contact-row" key={channel.title}>
                <strong>{channel.title}</strong>
                <p>{channel.detail}</p>
                <span>{channel.action}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="content-card">
          <div className="section-kicker">Trusted Organizations</div>
          <h2>Start with established support networks</h2>
          <p>
            If you want to donate, go to the Donate page to choose from the
            official organizations we recommend.
          </p>
          <Link to="/donate" className="secondary-button article-link">
            Go to Donate page
          </Link>
          <div className="contact-list">
            {trustedOrganizations.slice(0, 4).map((organization) => (
              <div className="contact-row" key={organization.name}>
                <strong>{organization.name}</strong>
                <p>{organization.focus}</p>
                <a
                  href={organization.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {organization.url.replace('https://', '')}
                </a>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default Help;
