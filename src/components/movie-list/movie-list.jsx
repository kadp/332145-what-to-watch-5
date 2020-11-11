import PropTypes from "prop-types";
import {connect} from "react-redux";


const MovieList = (props) => {

  const {films, showMoreCount, renderCard} = props;
  const renderFilmList = films.slice(0, showMoreCount);

  return (
    renderFilmList.map(renderCard)
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
