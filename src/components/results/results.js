import React from 'react';

import './results.css';

const Results = ({ score, maxScore, onRestartBtn}) => {
  return (
    <div className="jumbotron results">
      <h1 className="display-3 text-center">Поздравляем!</h1>
      <p className="lead text-center">
        {`Вы прошли викторину и набрали ${score} из ${maxScore}возможных баллов!`}
      </p>
      <hr className="my-4" />
      <button className="btn btn-primary" onClick={onRestartBtn}>Попробовать еще раз!</button>
    </div>
  );
}

export default Results;
