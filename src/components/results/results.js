import React, { Fragment } from 'react';

import './results.css';
import winBirdImg from '../../assets/image/win-bird.jpg';

const MasScoreContent = () => {
  return (
    <Fragment>
      <p className="lead text-center">{'Теперь ты знаешь кто чирикнул! ;)'}</p>
      <img className="win-bird-image" src={winBirdImg} alt="win-bird" />
    </Fragment>
  );
}

const Results = ({ score, maxScore, onRestartBtn}) => {

  return (
    <div className="jumbotron results">
      <h1 className="display-3 text-center">Поздравляем!</h1>
      <p className="lead text-center">
        {`Вы прошли викторину и набрали ${score} из ${maxScore} возможных баллов!`}
      </p>
      <hr className="my-4" />
      {score === maxScore ? <MasScoreContent /> : null}
      <button className="btn btn-primary" onClick={onRestartBtn}>Попробовать еще раз!</button>
    </div>
  );
}

export default Results;
