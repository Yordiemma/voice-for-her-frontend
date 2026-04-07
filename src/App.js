import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HelpPage from './components/Help';
import ReportPage from './components/ReportPage';
import ArticlesPage from './components/ArticlesPage';
import ArticleDetailPage from './components/ArticleDetailPage';
import DonatePage from './components/DonatePage';
import './styles/globals/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
