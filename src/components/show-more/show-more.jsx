import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";

const ShowMore = (props) => {
  const {showMoreCount, incrementCount} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => (incrementCount(showMoreCount))}>
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  showMoreCount: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {

  return {
    showMoreCount: state.STATEAPP.showMoreCount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incrementCount(showMoreCount) {
    dispatch(ActionCreator.incrementShowMoreCount(showMoreCount));
  }
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);

