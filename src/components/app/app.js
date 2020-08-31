import React, { Component } from 'react';

import './app.css';
import Header from '../header/header';
import RandomBlock from '../random-block';
import ItemList from '../item-list';
import ItemDetails from '../item-details/item-details';

import birdsData from '../../data/birds';
import winSound from '../../assets/audio/win.mp3';
import errorSound from '../../assets/audio/error.mp3';

export default class App extends Component {


  state = {
    score: 0,
    level: 0,
    selectedItemId: null,
    randomItemId: this.getRandomItemId(),
    isGuessed: false
  }

  getRandomItemId() {
    return Math.floor(Math.random() * 6) + 1;
  }

  onItemSelected = (id) => {
    this.setState({selectedItemId: id});

    if (id === this.state.randomItemId) {
      this.winSelect(id);
    } else {
      this.errorSelect(id);
    }
  }

  winSelect(id) {
    console.log('win!');
    this.setState(({score}) => ({
      score: score + 1,
      isGuessed: true,
      selectedItemId: id
    }));

    this.audioPlayer.src = winSound;
    this.audioPlayer.play();
  }

  errorSelect(id) {
    console.log('error');
    this.setState(({score}) => ({
      isGuessed: false,
      selectedItemId: id
    }));

    this.audioPlayer.src = errorSound;
    this.audioPlayer.play();
  }

  audioPlayer = new Audio();

  render() {
    const { score, level, selectedItemId, randomItemId, isGuessed } = this.state;
    const randomItem = birdsData[level][randomItemId - 1];
    const selectedItem = selectedItemId ? birdsData[level][selectedItemId - 1] : null;
    // подсказка
    console.log(randomItem.name);

    return (
      <div className="container">
        <Header score={score} />
        <RandomBlock randomItem={randomItem} isGuessed={isGuessed}/>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList level={level} onItemSelected={this.onItemSelected}/>
          </div>
          <div className="col-md-6">
            <ItemDetails item={selectedItem}/>
          </div>
          <button className="btn btn-primary">Next Level</button>
        </div>
        <audio src={winSound} id="winSound"></audio>
        <audio src={errorSound} id="errorSound"></audio>
      </div>
    );
  }
}
