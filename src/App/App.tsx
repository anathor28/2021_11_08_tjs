import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Button from "./components/Button/Button";

class App extends React.Component {
  state:any
  constructor(props){
    super(props);
    this.state={counter:0};
  }
  render() {
    return (
      <div className="App">
        <h1>Etat de mon compteur de value :{this.state.counter}</h1>

        <Button
          onButtonClick={(arg) => {
            this.setState({counter:this.state.counter+1});
            console.log( this.state.counter);
          }}
        >
          Ajout +1
        </Button>
        <Button
          bgColor="tomato"
          onButtonClick={() => {
            this.setState({counter:this.state.counter-1});
            console.log( this.state.counter);
          }}
        >
          suppress. -1
        </Button>
      </div>
    );
  }
}

export default App;
