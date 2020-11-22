import React from "react";
import PropTypes from "prop-types";
import PreviewPlayer from "../preview-player/preview-player";

const Card = ({title, poster, id, onHover, trailer, isPreview, onOut, onClick}) => {

  return isPreview ? (
    <article className="small-movie-card catalog__movies-card" onMouseOut={onOut}>
      <PreviewPlayer trailer={trailer} poster={poster} />
    </article>
  ) : (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => onHover(id)} onMouseOut={onOut} onClick={() => onClick(id)}>
      <div className="small-movie-card__image">
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
  onClick: PropTypes.func.isRequired,
};

export default Card;
