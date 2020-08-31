import React, { Component } from 'react';

import './random-block.css';
import defaultBirdImg from '../../assets/image/default-bird.jpg';

export default class RandomBlock extends Component {

  render() {
    return (
      <div className="random-block jumbotron rounded">
        <img className="bird-image" src={defaultBirdImg} alt="bird" />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>******</h3>
            </li>
            <li className="list-group-item">
              <div className="audio-player"></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
