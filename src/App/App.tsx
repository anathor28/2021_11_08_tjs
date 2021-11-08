import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  let counter = 0;
  return (
    <div className="App">
      <h1>Etat de mon compteur de value :{counter}</h1>

      <Button
        onButtonClick={(arg) => {
          counter++;
          console.log(counter);
        }}
      >
        Ajout +1
      </Button>
      <Button
        bgColor="tomato"
        onButtonClick={() => {
          counter--;
          console.log(counter);
        }}
      >
        suppress. -1
      </Button>
    </div>
  );
}

export default App;
