import React, { Component } from 'react';

import './random-block.css';
import defaultBirdImg from '../../assets/image/default-bird.jpg';

export default class RandomBlock extends Component {

  render() {
    return (
      <div className="random-block jumbotron rounded">
        <img className="bird-image" src={defaultBirdImg} alt="bird"></img>
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h3>******</h3>
            </li>
            <li class="list-group-item">
              <div class="audio-player"></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
