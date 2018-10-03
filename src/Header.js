import React from 'react';
// ou import React, { Component } from 'react';

import logo from "./logo.svg";
import "./App.css";

class Header extends React.Component {
// ou class Header extends Component {
    render() {
        return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes avec le Header dans un fichier a part</h1>
        </header>
        );
    }

}

export default Header;