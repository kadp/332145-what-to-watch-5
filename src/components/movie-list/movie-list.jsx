import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";


class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onhandleCardonMouseOver = this.handleCardonMouseOver.bind(this);
  }


  handleCardonMouseOver(e) {
    console.log(`target id`, e.target.id);
    this.setState = e.target.id;
    console.log(`state`, this.state);
  }

  render() {
    const {films} = this.props;

    return (
      <Fragment>
        {films.map((film, i) => <Card key={film + i} id={film.id} title={film.title} poster={film.poster} hover={this.onhandleCardonMouseOver}/>)}
      </Fragment>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
