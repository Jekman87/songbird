import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div class="header d-flex">
      <div class="header-top d-flex">
        <div class="logo"><h1>SongBird</h1></div>
        <h5>Score: <span class="score">0</span></h5>
      </div>
      <ul class="header-bottom">
        <li class="page-item active">
          <a class="page-link" href="/#">Разминка</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">Воробьиные</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">Лесные птицы</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">Певчие птицы</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">Хищные птицы</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">Морские птицы</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
