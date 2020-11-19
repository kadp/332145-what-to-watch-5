import React, {createRef, PureComponent} from "react";


const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();

      this.state = {
        isPlay: false,
        currentTime: 0,
      };

      this.handlePlayPauseButton = this.handlePlayPauseButton.bind(this);
      this.handleFullScreenButton = this.handleFullScreenButton.bind(this);
    }

    handlePlayPauseButton() {
      if (this._videoRef.current.paused) {
        this._videoRef.current.play();
        this.setState({
          isPlay: true,
          currentTime: Math.floor(this._videoRef.current.currentTime),
        });
        this.timerId = setInterval(() => {
          this.setState({
            currentTime: Math.floor(this._videoRef.current.currentTime),
          });
        }, 1000);
      } else {
        this._videoRef.current.pause();
        this.setState({
          isPlay: false,
          currentTime: Math.floor(this._videoRef.current.currentTime),
        });
        clearInterval(this.timerId);
      }
    }

    handleFullScreenButton() {
      this._videoRef.current.requestFullscreen();
    }

    render() {
      return (
        <Component
          {...this.props}
          activeLink={this.state.activeLink}
          onFullScreen={this.handleFullScreenButton}
          onPlayPause={this.handlePlayPauseButton}
          videoRef={this._videoRef}
          currentTime={this.state.currentTime}
        />
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;
