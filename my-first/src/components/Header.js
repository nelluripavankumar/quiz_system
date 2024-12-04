import React from 'react';
import './Header.css';

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <h1>Placement Quiz Website</h1>
      <nav className="nav">
        <button onClick={() => window.location.href = '/aptitude'}>Aptitude</button>
        <button onClick={() => window.location.href = '/verbal'}>Verbal</button>
        <button onClick={() => window.location.href = '/reasoning'}>Reasoning</button>
        <button onClick={() => window.location.href = '/os'}>Operating System</button>
        <button onClick={() => window.location.href = '/coding'}>Coding</button>
        <button onClick={() => window.location.href = '/company-papers'}>Company Papers</button>
      </nav>
      <div className="settings">
        <button onClick={toggleTheme}>Appearance</button>
      </div>
    </header>
  );
};

export default Header;
