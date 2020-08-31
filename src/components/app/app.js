import React, { Component } from 'react';

import './app.css';
import Header from '../header/header';
import RandomBlock from '../random-block';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <RandomBlock />
      </div>
    );
  }
}
