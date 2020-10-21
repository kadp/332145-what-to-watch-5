import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";


class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {currentId: null};
    this.onHandleCardonMouseOver = this.handleCardonMouseOver.bind(this);
  }


  handleCardonMouseOver(e) {
    this.setState({
      currentId: e.target.id
    });
  }

  render() {
    const {films} = this.props;

    return (
      <Fragment>
        {films.map((film) => <Card key={film.id} id={film.id} title={film.title} poster={film.poster} onHover={this.onHandleCardonMouseOver}/>)}
      </Fragment>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
