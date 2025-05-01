// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navi';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Photography from './pages/work/photography.jsx';
import CGImages from './pages/work/CGimages.jsx';
import Film from './pages/work/Film.jsx';
import './style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/photography" element={<Photography />} />
          <Route path="/work/cgimages" element={<CGImages />} />
          <Route path="/work/film" element={<Film />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
