import React, { Fragment } from 'react';

import './results.css';
import winBirdImg from '../../assets/image/win-bird.jpg';

const MaxScoreContent = () => {
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
      <h2 className="text-center">Поздравляем!</h2>
      <p className="lead text-center">
        {`Вы прошли викторину и набрали ${score} из ${maxScore} возможных баллов!`}
      </p>
      <hr className="my-4" />
      {score === maxScore ? <MaxScoreContent /> : null}
      <button className="btn btn-info btn-restart" onClick={onRestartBtn}>Попробовать еще раз!</button>
    </div>
  );
}

export default Results;
