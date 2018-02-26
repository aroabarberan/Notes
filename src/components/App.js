import React, { Component } from 'react';
import logo from './logo.svg';
import './components/App.css';

//Component

import Header from './Global/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />   
      </div>
    );
  }
}

export default App;
