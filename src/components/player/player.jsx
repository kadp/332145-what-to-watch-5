import React from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";
import {Link} from "react-router-dom";
import {ROUTER_LINK} from "../../constants";


const Player = ({movie, onFullScreen, onPlayPause, videoRef, currentTime}) => {

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={movie.trailer}
        className="player__video"
        poster={movie.poster}
      ></video>

      <Link to={ROUTER_LINK.FILM} type="button" className="player__exit">
        Exit
      </Link>

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
          <div className="player__time-value">{currentTime}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayPause}
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
            onClick={onFullScreen}
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
};

Player.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
  onFullScreen: PropTypes.func.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  videoRef: PropTypes.object.isRequired,
};

export default Player;
