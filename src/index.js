import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import Header from './components/Global/Header';
import Content from './components/Global/Content';
import Footer from './components/Global/Footer';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
