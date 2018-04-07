import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            {/* <a className="navbar-brand" href="#"></a> */}
          </div>
          <h3>Notes</h3>
        </div>
      </nav>
    );
  }
}

export default Header;
