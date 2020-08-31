import React, { Component } from 'react';

import './app.css';
import Header from '../header/header';
import RandomBlock from '../random-block';
import ItemList from '../item-list';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <RandomBlock />
        <div class="row mb2">
          <div class="col-md-6">
            <ItemList />
          </div>
          <div class="col-md-6">

          </div>
        </div>
      </div>
    );
  }
}
