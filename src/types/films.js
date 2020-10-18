import PropTypes from "prop-types";

export const AppV = {
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  routerLink: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
};

export const Types = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  trailer: PropTypes.string.isRequired,
  myList: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.array.isRequired,
  starring: PropTypes.array.isRequired,
  duration: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
};
