import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentId: null,
    };

    this.timer = null;
    this.onHandleCardMouseOver = this.handleCardMouseOver.bind(this);
    this.onHandleCardMouseOut = this.handleCardMouseOut.bind(this);
    this.getIsPreview = this.getIsPreview.bind(this);
  }

  handleCardMouseOver(id) {
    if (this.timer === null) {
      this.timer = setTimeout(() => {
        this.setState({currentId: id});
      }, 1000);
    }
  }

  handleCardMouseOut() {
    this.setState({
      currentId: null,
    });
    clearTimeout(this.timer);
    this.timer = null;
  }

  getIsPreview(id) {
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
            isPreview={this.getIsPreview(film.id)}
            onHover={this.onHandleCardMouseOver}
            onOut={this.onHandleCardMouseOut}
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
