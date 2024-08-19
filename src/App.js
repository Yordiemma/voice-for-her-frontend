// File: src/App.js
import React from 'react';
import './App.css'; // Ensure this file is in the src directory, not components.

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Help from './components/Help';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;