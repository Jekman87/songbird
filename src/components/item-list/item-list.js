import React from 'react';

import './item-list.css';
import { birdsData } from '../../data/birds';

const ItemList = ({level, levelAnswers, onItemSelected}) => {

  const birdList = birdsData[level].map(({ id, name }) => {
    return (
      <li
        className={`list-group-item default ${levelAnswers[id - 1]}`}
        key={id}
        onClick={() => onItemSelected(id)}>
        <span className="li-btn"></span>
        {name}
      </li>
    );
  })

  return (
    <ul className="item-list list-group">
      {birdList}
    </ul>
  );
}

export default ItemList;
