import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {DEFAULT_GENRE} from "../../constants";
import films from "../../mock/films";

const genresSet = new Set();
films.forEach((film) => {
  film.genre.forEach((genreList) => {
    genresSet.add(genreList);
  });
});
const genreList = Array.from(genresSet);
genreList.unshift(DEFAULT_GENRE);

const GenresList = (props) => {

  const {genre, onChangeGenre} = props;

  return (
    <Fragment >
      {genreList.map((genreFilter, i) =>
        <li className={`catalog__genres-item` + (genre === genreFilter ? ` catalog__genres-item--active` : ``)} key={i}>
          <a href="#" className="catalog__genres-link" onClick={() => (onChangeGenre(genreFilter))}>{genreFilter}</a>
        </li>)
      }
    </Fragment>
  );
};

GenresList.propTypes = {
  onChangeGenre: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {

  return {
    genre: state.genre,
  };
};


const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

