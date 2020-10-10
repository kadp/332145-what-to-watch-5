import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const PromoFilm = {
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDom.render(
    <App
      genre={PromoFilm.genre}
      releaseDate={PromoFilm.releaseDate}
    />,
    document.querySelector(`#root`)
);
