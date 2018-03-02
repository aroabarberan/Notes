import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#"></a>
          </div>
          <p>Notes</p>
        </div>
      </nav>
    );
  }
}

export default Header;
