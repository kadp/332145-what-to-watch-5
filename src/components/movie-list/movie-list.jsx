import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {connect} from "react-redux";


class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentId: null,
    };


    this.timer = null;
    this.onHandleCardMouseOver = this.onHandleCardMouseOver.bind(this);
    this.onHandleCardMouseOut = this.onHandleCardMouseOut.bind(this);
    this.onHandleCardClick = this.onHandleCardClick.bind(this);
    this.getIsPreview = this.getIsPreview.bind(this);
  }

  onHandleCardMouseOver(id) {
    if (this.timer === null) {
      this.timer = setTimeout(() => {
        this.setState({currentId: id});
      }, 1000);
    }
  }

  onHandleCardMouseOut() {
    this.setState({
      currentId: null,
    });
    clearTimeout(this.timer);
    this.timer = null;
  }

  onHandleCardClick(id) {
    // eslint-disable-next-line no-console
    console.log(`cardId`, id, typeof id);
  }

  getIsPreview(id) {
    return parseInt(this.state.currentId, 10) === id;
  }

  render() {
    const {films, showMoreCount} = this.props;
    const renderFilms = films.slice(0, showMoreCount);
    return (
      <Fragment>
        {renderFilms.map((film) => (
          <Card
            key={film.id}
            id={film.id}
            title={film.title}
            poster={film.poster}
            trailer={film.trailer}
            isPreview={this.getIsPreview(film.id)}
            onHover={this.onHandleCardMouseOver}
            onOut={this.onHandleCardMouseOut}
            onClick={this.onHandleCardClick}
          />
        ))}
      </Fragment>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  showMoreCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {

  return {
    films: state.films,
    showMoreCount: state.showMoreCount,
  };
};


export {MovieList};
export default connect(mapStateToProps)(MovieList);
