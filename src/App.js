import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import HomePage from './components/HomePage';
import About from './components/About';
import Help from './components/Help';
import AwareHer from './components/Awareher';
function App() {
  return (
    <Router>
      <Navbar /> {}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/awareHer" element={<AwareHer />} /> {}
      </Routes>
      <Footer /> {}
    </Router>
  );
}

export default App;
