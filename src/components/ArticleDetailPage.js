import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { featuredArticles } from '../data/siteContent';

function ArticleDetailPage() {
  const { slug } = useParams();
  const article = featuredArticles.find((entry) => entry.slug === slug);

  if (!article) {
    return (
      <div className="page-shell page-interior">
        <section className="page-hero">
          <div className="section-kicker">Article</div>
          <h1>Article not found</h1>
          <p className="page-intro">
            The article you tried to open does not exist or may have been moved.
          </p>
          <Link to="/articles" className="secondary-button">
            Back to Awareness
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page-shell page-interior">
      <section className="page-hero">
        <div className="section-kicker">{article.category}</div>
        <h1>{article.title}</h1>
        <p className="page-intro">{article.excerpt}</p>
      </section>

      <section className="section-block">
        <article className="content-card article-detail-card">
          <div className="article-meta-row">
            <strong>{article.readTime}</strong>
            <Link to="/articles" className="article-link">
              Back to all articles
            </Link>
          </div>

          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {article.url ? (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button article-detail-action"
            >
              Read original article
            </a>
          ) : null}
        </article>
      </section>
    </div>
  );
}

export default ArticleDetailPage;
