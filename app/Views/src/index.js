import React from 'react';
import ReactDOM from 'react-dom/client';
// import './assets/css/styles.css';
// import logo from './assets/images/logo.png';

const App = () => {
  return (
    <div>
      {/* <img src={logo} alt="Logo" /> */}
      <h1>Hello, Webpack with CodeIgniter 4!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app
root.render(<App />);
