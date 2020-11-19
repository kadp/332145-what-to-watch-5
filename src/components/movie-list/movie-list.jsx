import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ShowMore from "../show-more/show-more";

const MovieList = ({films, showMoreCount, renderCard}) => {

  const renderFilmList = films.slice(0, showMoreCount);

  return (
    <Fragment>
      <div className="catalog__movies-list">
        {renderFilmList.map(renderCard)}
      </div>

      {showMoreCount >= films.length ? `` : <ShowMore />}
    </Fragment>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  showMoreCount: PropTypes.number.isRequired,
  renderCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    showMoreCount: state.showMoreCount,
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
