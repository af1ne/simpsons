import React, { Component } from "react";
import logo from "./logo.svg";
import Lamp from './Lamp';
import "./App.css";
import Quotes from "./Quotes";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      working: props.working
    };
  }

  handleClick = () => {
    //console.log('Button clicked');
    this.setState({ working: !this.state.working });
  };

  render() {
    
    const doing = this.state.working ? 'working' : 'pause';

    return (
      <div> 
        <div className="App">
          <header className="App-header">
            <img src={logo} className={doing} alt="logo" />
            <h1 className="App-title">Simpsons Quotes</h1>
          </header>
          </div>

        <div className="App">
          <button onClick={this.handleClick}>
              {doing.toUpperCase()}
          </button>
        </div>
        

        <Lamp on />
        <Lamp />

        <Quotes/>

      </div>
    );
  }
}

export default App;