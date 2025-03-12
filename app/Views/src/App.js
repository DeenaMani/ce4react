import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';

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
            <Route path="/php/codeigniter/sample/" element={<Home />} />
            <Route path="/php/codeigniter/sample/about" element={<About />} />
            <Route path="/php/codeigniter/sample/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
