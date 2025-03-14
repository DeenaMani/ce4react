import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/php/codeigniter/sample/">Home</Link></li>
          <li><Link to="/php/codeigniter/sample/about">About</Link></li>
          <li><Link to="/php/codeigniter/sample/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
