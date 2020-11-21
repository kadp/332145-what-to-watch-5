import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {DEFAULT_GENRE} from "../../constants";


const GenresList = ({genre, onChangeGenre, genreList}) => {
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
  genreList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {

  const genresSet = new Set();
  state.DATA.films.forEach((film) => {
    genresSet.add(film.genre);
  });
  const genreList = Array.from(genresSet);
  genreList.unshift(DEFAULT_GENRE);

  return {
    genre: state.STATEAPP.genre,
    films: state.DATA.films,
    genreList,
  };
};


const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

