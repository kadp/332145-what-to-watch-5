import React from "react";
import ReactDom from "react-dom";
import {ROUTER_LINK} from "./constants";
import films from "./mock/films";
import reviews from "./mock/reviews";
import App from "./components/app/app";

const PromoFilm = {
  genre: `Drama`,
  releaseDate: 2014
};

ReactDom.render(
    <App
      genre={PromoFilm.genre}
      releaseDate={PromoFilm.releaseDate}
      films={films}
      reviews={reviews}
      routerLink={ROUTER_LINK}
    />,
    document.querySelector(`#root`)
);
