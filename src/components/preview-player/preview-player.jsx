import React from "react";
import PropTypes from "prop-types";


const PreviewPlayer = (props) => {
  const {trailer, poster} = props;

  return (
    <video src={trailer} className="player__video" controls muted autoPlay poster={poster}></video>
  );
};

PreviewPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
};


export default PreviewPlayer;
