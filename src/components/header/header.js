import React from 'react';

import './header.css';
import { birdsTitles as itemTitles } from '../../data/birds';

const Header = ({ score, level}) => {
  const titles = itemTitles.map((title, idx) => {
    return (
        <li className={`page-item ${level === idx ? 'active' : ''}`} key={idx}>
          <a className="page-link" href="/#">{title}</a>
        </li>
    );
  })

  return (
    <div className="header d-flex">
      <div className="header-top d-flex">
        <div className="logo"><h1>SongBird</h1></div>
        <h5>Score: <span className="score">{score}</span></h5>
      </div>
      <ul className="header-bottom">
        {titles}
      </ul>
    </div>
  );
};

export default Header;
