import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

const CurrentRoute = () => {
  const location = useLocation();
  return <div>Current Route: {location.pathname}</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <CurrentRoute /> {/* Display current route */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
