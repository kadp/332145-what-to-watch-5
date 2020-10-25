import React from "react";
import PropTypes from "prop-types";
import PreviewPlayer from "../preview-player/preview-player";

const Card = (props) => {
  const {title, poster, id, onHover, trailer, isPreview, onOut} = props;

  return isPreview ? (
    <article className="small-movie-card catalog__movies-card" onMouseOut={onOut}>
      <PreviewPlayer trailer={trailer} poster={poster} />
    </article>
  ) : (
    <article className="small-movie-card catalog__movies-card" >
      <div className="small-movie-card__image" id={id} onMouseOver={onHover}>
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  trailer: PropTypes.string.isRequired,
  isPreview: PropTypes.bool.isRequired,
  onOut: PropTypes.func.isRequired,
};

export default Card;
