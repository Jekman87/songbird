import React, { Component } from 'react';

import './app.css';
import 'react-h5-audio-player/lib/styles.css';

import Header from '../header/header';
import RandomBlock from '../random-block';
import ItemList from '../item-list';
import ItemDetails from '../item-details/item-details';

import { birdsData as data } from '../../data/birds';
import winSound from '../../assets/audio/win.mp3';
import errorSound from '../../assets/audio/error.mp3';
import Results from '../results/results';

export default class App extends Component {

  state = this.initialState();

  initialState() {
    return {
      score: 0,
      currentPoint: data[0].length - 1,
      level: 0,
      selectedItemId: null,
      randomItemId: this.getRandomItemId(),
      isGuessed: false,
      levelAnswers: this.getEmptyLevelAnswersArr(),
      gameEnd: false
    };
  }

  componentDidMount() {
    this.nativePlayer.volume = 0.5;
  }

  getRandomItemId() {
    return Math.floor(Math.random() * 6) + 1;
  }

  getEmptyLevelAnswersArr() {
    return Array(data[0].length).fill('');
  }

  onItemSelected = (id) => {
    this.setState({selectedItemId: id})

    if (this.state.isGuessed) {
      return;
    }

    if (id === this.state.randomItemId) {
      this.winSelect(id);
    } else {
      this.errorSelect(id);
    }
  }

  winSelect(id) {
    console.log('win!');
    this.setState(({score, currentPoint, levelAnswers}) => {
      const newLevelAnswers = levelAnswers.map((el, idx) => idx === (id - 1) ? 'success' : el);

      return {
        score: score + currentPoint,
        isGuessed: true,
        levelAnswers: newLevelAnswers
      };
    });

    this.nativePlayer.src = winSound;
    this.nativePlayer.play();
  }

  errorSelect(id) {
    console.log('error');
    this.setState(({currentPoint, levelAnswers}) => {
      const newLevelAnswers = levelAnswers.map((el, idx) => idx === (id - 1) ? 'error' : el);

      return {
        currentPoint: currentPoint - 1,
        isGuessed: false,
        levelAnswers: newLevelAnswers
      };
    });

    this.nativePlayer.src = errorSound;
    this.nativePlayer.play();
  }

  nativePlayer = new Audio();

  nextLevel = () => {
    console.log('next level');
    const { level, levelAnswers } = this.state;

    if (level === levelAnswers.length - 1) {
      console.log('game end');
      this.setState({gameEnd: true});
      return;
    }

    this.setState(({level}) => ({
      currentPoint: data[0].length - 1,
      level: level + 1,
      selectedItemId: null,
      randomItemId: this.getRandomItemId(),
      isGuessed: false,
      levelAnswers: this.getEmptyLevelAnswersArr()
    }));
  }

  onRestartBtn = () => {
    this.setState(this.initialState());
  }

  render() {
    const { score, level, selectedItemId, randomItemId, isGuessed, levelAnswers, gameEnd } = this.state;
    const randomItem = data[level][randomItemId - 1];
    const selectedItem = selectedItemId ? data[level][selectedItemId - 1] : null;
    console.log('подсказка', randomItem.name);

    if (gameEnd) {
      return (
        <div className="container">
          <Header score={score} level={level}/>
          <Results score={score} maxScore={30} onRestartBtn={this.onRestartBtn}/>
        </div>
      );
    }

    return (
      <div className="container">
        <Header score={score} level={level}/>
        <RandomBlock randomItem={randomItem} isGuessed={isGuessed}/>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              level={level}
              levelAnswers={levelAnswers}
              onItemSelected={this.onItemSelected}/>
          </div>
          <div className="col-md-6">
            <ItemDetails item={selectedItem}/>
          </div>
          <button
            className="btn btn-primary"
            onClick={this.nextLevel}
            disabled={isGuessed ? false : true}
            >Next Level</button>
        </div>
        <audio src={winSound} id="winSound"></audio>
        <audio src={errorSound} id="errorSound"></audio>
      </div>
    );
  }
}
