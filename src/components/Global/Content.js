import React, { Component } from 'react';
import './css/Content.css';

//Component

class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="Content">
          <h1>I am the content</h1>
          <p>Lorem Imsupt</p>
          <script src="../src/dataBase.js"></script>
        </div>
      </div>
    );
  }
}

export default Content;
