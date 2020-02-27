import React from 'react';
import Board from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header className="header">
      <h1 className="header__h1"><span className="header__text">Exosphere Board</span></h1>
    </header>
    <Board />
  </div>
  );
}

export default App;