import React from 'react';
import { Link } from 'react-router-dom';
import { featuredArticles } from '../data/siteContent';
import spotlightImage from '../assets/Faven.jpg';

const havanArticleUrl =
  'https://zehabesha.com/rape-and-murder-of-7-year-old-girl-public-outrage-news-examiner/';

function ArticlesPage() {
  return (
    <div className="page-shell page-interior">
      <section className="page-hero">
        <div className="section-kicker">Awareness and Articles</div>
        <h1>Awareness matters because silence protects abuse.</h1>
        <p className="page-intro">
          This page brings attention to violence against women and children
          through public awareness articles, survivor-centered education, and
          stories that should never be forgotten.
        </p>
      </section>

      <section className="section-block two-column-layout">
        <article className="content-card">
          <div className="section-kicker">Awareness Spotlight</div>
          <h2>Havan’s story belongs in the public memory</h2>
          <p>
            Havan represents the reality behind the charts: a child whose life
            was taken through violence. Her story reminds us that abuse is not
            abstract data. It is loss, fear, trauma, and injustice lived by real
            women, girls, and children.
          </p>
          <p>
            This platform keeps stories like hers visible so awareness can lead
            to pressure, protection, accountability, and action.
          </p>
          <a
            href={havanArticleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button article-link"
          >
            Read Havan&apos;s full story
          </a>
        </article>

        <article className="content-card">
          <img
            src={spotlightImage}
            alt="Artwork representing Havan's story"
            className="hero-main-image"
          />
        </article>
      </section>

      <section className="section-block contributor-banner">
        <div>
          <h2>Publishing awareness content</h2>
          <p>
            Anyone can read these articles. Signed-in contributors can write and
            publish awareness posts that help expose abuse, educate communities,
            and keep urgent stories visible.
          </p>
        </div>
        <div className="auth-pill">Authentication required to publish</div>
      </section>

      <section className="section-block article-grid">
        {featuredArticles.map((article) => (
          <article className="article-card detailed" key={article.title}>
            <span>{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <strong>{article.readTime}</strong>
            <Link to={`/articles/${article.slug}`} className="article-link">
              Read more
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ArticlesPage;
