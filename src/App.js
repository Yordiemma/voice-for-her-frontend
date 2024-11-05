import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer here
import HomePage from './components/HomePage';
import About from './components/About';
import Help from './components/Help';
import Awareher from './components/Awareher';
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is now consistent across all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/awareher" element={<Awareher />} /> {/* Add Awareher route */}
      </Routes>
      <Footer /> {/* Footer is now consistent across all pages */}
    </Router>
  );
}

export default App;
