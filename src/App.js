import React from 'react';
import './App.css'; // Import the global styles

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Help from './components/Help';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root path to /home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Define actual home route */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />

          {/* Optional: Catch-all route for unknown paths */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
