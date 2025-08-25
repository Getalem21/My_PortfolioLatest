import React from 'react';
import {HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Gallery from './components/Gallery.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';

import './App.css';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar on all pages except Home */}
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>

      <Footer />
      <Sidebar />
    </>
  );
}

const MainApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default MainApp;
