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
      <Button bgColor="tomato" onButtonClick={()=>{}}>Clikes moi dessus</Button>
      <Button bgColor="green" color='black' style={{textDecoration:'underline', fontSize:'32pt'}}  onButtonClick={()=>{}}/>
    </div>
  );
}

export default App;
