import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const GenresList = (props) => {

  const {genre, genreList, onChangeGenre} = props;

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
  genreList: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {

  const genresSet = new Set();
  state.films.forEach((film) => {
    film.genre.forEach((genreList) => {
      genresSet.add(genreList);
    });
  });
  let genreList = Array.from(genresSet);
  genreList.unshift(`Все жанры`);

  return {
    genre: state.genre,
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

