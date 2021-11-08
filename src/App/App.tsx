import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Button2 from './components/Button2/Button';

function App() {
  return (
    <div className="App">
      <Button text="Button text"/>
      <Button2 text="Button text"/>
    </div>
  );
}

export default App;
