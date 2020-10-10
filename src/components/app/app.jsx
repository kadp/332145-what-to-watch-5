import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";


const App = (props) => {

  const {genre, releaseDate} = props;

  return (
    <Main genre={genre} releaseDate={releaseDate} />
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default App;
