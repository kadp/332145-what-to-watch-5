import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";


const MovieList = (props) => {
  const {films} = props;

  return (
    <Fragment>
      {films.map((film, i) => <Card key={film + i} title={film.title} poster={film.poster} />)}
    </Fragment>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
