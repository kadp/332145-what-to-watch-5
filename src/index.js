import React from "react";
import ReactDom from "react-dom";
import {ROUTER_LINK} from "./constants";
import films from "./mock/films";
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
      routerLink={ROUTER_LINK}
    />,
    document.querySelector(`#root`)
);
