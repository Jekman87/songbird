import React, { Component, createRef } from 'react';

import './random-block.css';
import defaultBirdImg from '../../assets/image/default-bird.jpg';
import ReactAudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

export default class RandomBlock extends Component {
  player = createRef();

  componentDidUpdate() {
    if (this.props.isGuessed) {
      this.player.current.audio.current.pause();
    }
  }

  render() {
    const { randomItem, isGuessed } = this.props;

    return (
      <div className="random-block jumbotron rounded">
        <img className="bird-image" src={ isGuessed ? randomItem.image : defaultBirdImg } alt="bird" />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>{isGuessed ? randomItem.name : '******'}</h3>
            </li>
            <li className="list-group-item">
              <div className="audio-wrapper">
                <ReactAudioPlayer
                  className="audio-player"
                  layout="horizontal"
                  src={randomItem.audio}
                  autoPlayAfterSrcChange={false}
                  ref={this.player}
                  showJumpControls={false}
                  customProgressBarSection={[
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.CURRENT_TIME,
                    RHAP_UI.PROGRESS_BAR,
                    RHAP_UI.DURATION
                  ]}
                  customControlsSection={[RHAP_UI.VOLUME_CONTROLS]}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
