import React, { useState } from 'react';
import Header from './components/Header';
import Topics from './components/Topics';

import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light'); // light mode by default

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <main>
        <Topics />
      </main>
    </div>
  );
};

export default App;
