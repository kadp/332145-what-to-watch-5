import React from "react";
import PropTypes from "prop-types";


const Card = (props) => {
  const {title, poster, id, onHover} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image" id={id} onMouseOver={onHover}>
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};


Card.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
