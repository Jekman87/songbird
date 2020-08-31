import React from 'react';

import './header.css';

const Header = ({score}) => {
  return (
    <div className="header d-flex">
      <div className="header-top d-flex">
        <div className="logo"><h1>SongBird</h1></div>
        <h5>Score: <span className="score">{score}</span></h5>
      </div>
      <ul className="header-bottom">
        <li className="page-item active">
          <a className="page-link" href="/#">Разминка</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">Воробьиные</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">Лесные птицы</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">Певчие птицы</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">Хищные птицы</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">Морские птицы</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
