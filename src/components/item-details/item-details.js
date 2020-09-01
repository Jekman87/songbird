import React from 'react';

import './item-details.css';

const ItemDetails = ({ item }) => {
  if (!item) {
    return (
      <div className="bird-details card">
        <p>Послушайте плеер.<br/>
          Выберите птицу из списка.
        </p>
      </div>
    );
  }

  const { name, species, image, description, audio} = item;

  // const audioPlayer = new Audio();
  // audioPlayer.src = audio;
  // audioPlayer.play();

  return (
    <div className="bird-details card">
      <div className="card-body">
        <img className="bird-image" src={image} alt="bird" />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>{name}</h4>
          </li>
          <li className="list-group-item">
            <span>{species}</span>
          </li>
          <li className="list-group-item">
            <div className="audio-player">{audio}</div>
          </li>
        </ul>
      </div>
      <span className="bird-description">
        {description}
      </span>
    </div>
  );
}

export default ItemDetails;
