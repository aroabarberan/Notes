import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         Hello Word
        </p>
      </div>
    );
  }
}

export default Header;
