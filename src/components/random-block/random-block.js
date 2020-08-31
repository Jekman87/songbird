import React from 'react';

import './random-block.css';
import defaultBirdImg from '../../assets/image/default-bird.jpg';

const RandomBlock = ({ randomItem, isGuessed }) => {
  console.log('randomItemId: ', randomItem);

  return (
    <div className="random-block jumbotron rounded">
      <img className="bird-image" src={defaultBirdImg} alt="bird" />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{isGuessed ? randomItem.name : '******'}</h3>
          </li>
          <li className="list-group-item">
            <div className="audio-player"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RandomBlock;
