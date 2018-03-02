import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="#"></a>
          </div>
          <h3>Notes</h3>
        </div>
      </nav>
    );
  }
}

export default Header;
