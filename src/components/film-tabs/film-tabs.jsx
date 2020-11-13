import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {MovieType} from "../../types/films";


class FilmTabs extends PureComponent {
  constructor(props) {
    super(props);
    console.log(`FilmTabs - pure`, props);
  }

  render() {

    const {renderTabs} = this.props;

    return (
      <Fragment>
        <h1>wtf man</h1>
        {renderTabs}
      </Fragment>
    );
  }
}

FilmTabs.propTypes = {
  movie: PropTypes.shape(MovieType).isRequired,
  renderTabs: PropTypes.func.isRequired,
};

export default FilmTabs;
