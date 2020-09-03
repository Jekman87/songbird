import React, { Component } from 'react';

import './item-details.css';
import ReactAudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

export default class ItemDetails extends Component {

  render() {
    if (!this.props.item) {
      return (
        <div className="item-details card">
          <p>Послушайте плеер.<br/>
            Выберите птицу из списка.
          </p>
        </div>
      );
    }

    const { name, species, image, description, audio} = this.props.item;

    return (
      <div className="item-details card">
        <div className="card-body">
          <img className="item-image" src={image} alt="bird" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{name}</h4>
            </li>
            <li className="list-group-item">
              <span>{species}</span>
            </li>
            <li className="list-group-item">
              <div className="audio-wrapper">
                <ReactAudioPlayer
                  className="audio-player"
                  layout="horizontal"
                  src={audio}
                  autoPlayAfterSrcChange={false}
                  ref={(current) => (this.player = current)}
                  showJumpControls={false}
                  customProgressBarSection={[
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.CURRENT_TIME,
                    RHAP_UI.PROGRESS_BAR,
                    RHAP_UI.DURATION]}
                  customControlsSection={[RHAP_UI.VOLUME_CONTROLS]}
                />
              </div>
            </li>
          </ul>
        </div>
        <span className="bird-description">
          {description}
        </span>
      </div>
    );
  }
}
