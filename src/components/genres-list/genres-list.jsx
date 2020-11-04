import React, {Fragment} from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {

  const {genres} = props;

  return (
    <Fragment>
      {genres.map((genre, i) => <Fragment key={i}>
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      </Fragment>)}
    </Fragment>
  );
};

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default GenresList;
