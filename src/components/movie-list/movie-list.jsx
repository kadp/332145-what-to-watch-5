import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentId: null};

    this.onHandleCardonMouseOver = this.handleCardonMouseOver.bind(this);
    this.onHandleCardonMouseOut = this.handleCardonMouseOut.bind(this);
    this._getIsPreview = this._getIsPreview.bind(this);
  }

  handleCardonMouseOver(e) {
    e.persist();
    setTimeout(() => {
      this.setState({currentId: e.target.id});
    }, 1000);
  }

  handleCardonMouseOut() {
    this.setState({
      currentId: null,
    });
  }

  _getIsPreview(id) {
    return parseInt(this.state.currentId, 10) === id;
  }

  render() {
    const {films} = this.props;

    return (
      <Fragment>
        {films.map((film) => (
          <Card
            key={film.id}
            id={film.id}
            title={film.title}
            poster={film.poster}
            trailer={film.trailer}
            isPreview={this._getIsPreview(film.id)}
            onHover={this.onHandleCardonMouseOver}
            onOut={this.onHandleCardonMouseOut}
          />
        ))}
      </Fragment>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
