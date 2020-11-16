import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";

class Player extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
    };

    this.videoPlay = () => {
      this._videoRef.current.play();
      this.setState({
        isPlaying: true,
        currentTime: 0,
      });
    };

    this.videoPause = () => {
      this._videoRef.current.pause();
      this.setState({
        isPlaying: false,
        currentTime: this._videoRef.current.currentTime,
      });
    };

    this.videoFullScreen = () => {
      this._videoRef.current.pause();
    };

   // this._videoRef.current.currentTime = 33;
    this.handlePlayButton = this.handlePlayButton.bind(this);
    this.handleFullScreenButton = this.handleFullScreenButton.bind(this);
  }

  handlePlayButton() {
    if (this.state.isPlaying) {
      this.videoPause();
    } else {
      this.videoPlay();
    }
  }

  handleFullScreenButton() {
    this._videoRef.current.requestFullscreen();
  }

  render() {
    const {movie} = this.props;
    console.log(this._videoRef);
    console.log(`state`, this.state);
    return (
      <div className="player">
        <video
          ref={this._videoRef}
          src={movie.trailer}
          className="player__video"
          poster={movie.poster}
        ></video>

        <button type="button" className="player__exit">
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value="30"
                max="100"
              ></progress>
              <div className="player__toggler" style={{left: `30%`}}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{this.state.currentTime}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this.handlePlayButton}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={this.handleFullScreenButton}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
};

export default Player;
