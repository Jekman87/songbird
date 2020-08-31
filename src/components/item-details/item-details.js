import React, { Component } from 'react';

import './item-details.css';
import defaultBirdImg from '../../assets/image/default-bird.jpg';

export default class ItemDetails extends Component {

  render() {
    return (
      <div className="bird-details card">
        <div className="card-body">
          <img className="bird-image" src={defaultBirdImg} alt="bird" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>Галка</h4>
            </li>
            <li className="list-group-item">
              <span>Coloeus monedula</span>
            </li>
            <li className="list-group-item">
              <div className="audio-player"></div>
            </li>
          </ul>
        </div>
        <span className="bird-description">
          Слово «галка» произошло из старославянского языка и переводится как «чёрный».
          Этим словом часто называют воронов или других черных птиц. Латинское название
          галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.</span>
      </div>
    )
  }
}
