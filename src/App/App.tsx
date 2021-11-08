import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button onButtonClick={(arg)=>{
        console.log('Le button de App est clické', arg);
      }}><div>Balise</div><div>Balise 2</div></Button>
      <Button onButtonClick={()=>{}}>Clikes moi dessus</Button>
      <Button onButtonClick={()=>{}}/>
    </div>
  );
}

export default App;
