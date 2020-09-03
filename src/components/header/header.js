import React from 'react';

import './header.css';
import { birdsTitles as itemTitles } from '../../data/birds';

const Header = ({ score, level}) => {
  const titles = itemTitles.map((title, idx) => {
    return (
        <li className={`page-item ${level === idx ? 'active' : ''}`} key={idx}>
          {title}
        </li>
    );
  })

  return (
    <div className="header">
      <div className="header-top">
        <div className="logo">
          <h1>Song<span className="text-info">Bird</span></h1>
        </div>
        <h3>Score: <span className="text-info">{score}</span></h3>
      </div>
      <ul className="header-bottom bg-info">
        {titles}
      </ul>
    </div>
  );
};

export default Header;
