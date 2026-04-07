import React from 'react';
import { Link } from 'react-router-dom';
import { platformPrinciples, siteMapSections } from '../data/siteContent';

function About() {
  return (
    <div className="page-shell page-interior">
      <section className="page-hero">
        <div className="section-kicker">About the Platform</div>
        <h1>Voice for Her is built to serve the mission, not a personal profile.</h1>
        <p className="page-intro">
          The platform exists to raise awareness of abuse against women and
          children, make reporting more accessible, turn report data into public
          insight, and connect people to trusted support pathways worldwide.
        </p>
      </section>

      <section className="section-block two-column-layout">
        <article className="content-card">
          <h2>How the platform works</h2>
          <p>
            Public visitors can read awareness content, explore charts and
            statistics, and submit abuse reports without signing in. Anonymous
            reporting is supported to reduce barriers and protect privacy.
          </p>
          <p>
            Signed-in users are required only for writing and publishing
            awareness articles, which keeps public education open while adding
            accountability to contributor tools.
          </p>
        </article>

        <article className="content-card">
          <h2>Platform principles</h2>
          <ul className="feature-list">
            {platformPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Information Architecture</div>
            <h2>Modern site map for a global mission</h2>
          </div>
          <p className="section-lead">
            The structure below keeps public trust, reporting access, and
            educational content easy to find.
          </p>
        </div>

        <div className="site-map-grid">
          {siteMapSections.map((section) => (
            <article className="content-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <Link to={section.to} className="secondary-button about-nav-button">
                {section.action}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
