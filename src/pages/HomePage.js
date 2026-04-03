import React from 'react';
import { Link } from 'react-router-dom';
import GlobalAbuseMapSection from '../components/sections/GlobalAbuseMapSection';
import ReportsOverview from '../components/sections/ReportsOverview';
import heroImage from '../assets/w copy.png';

const homeRoutes = [
  {
    title: 'Report Abuse',
    description:
      'Speak up safely for a woman or child facing abuse. Anonymous reporting is available.',
    action: 'Report Abuse',
    to: '/report',
    tone: 'alert'
  },
  {
    title: 'Awareness',
    description:
      'Learn through survivor-centered stories, warning signs, and awareness articles, including Havan’s story.',
    action: 'Learn More',
    to: '/articles',
    tone: 'calm'
  },
  {
    title: 'Donate',
    description:
      'Support trusted organizations helping women and children survive violence, recover, and rebuild.',
    action: 'Support the Cause',
    to: '/donate',
    tone: 'deep'
  }
];

function HomePage() {
  return (
    <div className="page-shell">
      <section className="home-hero">
        <div className="hero-copy">
          <div className="section-kicker">Voice for Her</div>
          <h1>Every report represents a woman or child who should never have been left unprotected.</h1>
          <p className="hero-lead">
            Voice for Her is a human-rights platform focused on abuse against
            women and children. It brings together public report data, safe
            reporting, awareness, and direct pathways to trusted support.
          </p>
          <div className="hero-actions">
            <Link to="/report" className="primary-button">
              Report Abuse
            </Link>
            <Link to="/donate" className="secondary-button">
              Donate
            </Link>
          </div>
          <div className="hero-trust-bar">
            <span>Women and children first</span>
            <span>Anonymous reporting available</span>
            <span>Public abuse data</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-shell">
            <img
              src={heroImage}
              alt="Women standing together in support"
              className="hero-main-image"
            />
            <div className="hero-floating-card">
              <h2>What matters here</h2>
              <ul>
                <li>Make abuse visible</li>
                <li>Protect women and children</li>
                <li>Turn reports into public truth</li>
                <li>Move people toward action</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GlobalAbuseMapSection />

      <ReportsOverview />

      <section className="section-block home-route-section">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Take Action</div>
            <h2>Choose how you want to help</h2>
          </div>
          <p className="section-lead">
            Report abuse, learn from awareness stories, or support organizations
            already helping women and children on the ground.
          </p>
        </div>

        <div className="home-route-grid">
          {homeRoutes.map((route) => (
            <article className={`route-card route-card-${route.tone}`} key={route.title}>
              <h3>{route.title}</h3>
              <p>{route.description}</p>
              <Link to={route.to} className="secondary-button">
                {route.action}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
