import React from "react";
import ReactDom from "react-dom";
import {ROUTER_LINK} from "./constants";
import App from "./components/app/app";

const PromoFilm = {
  genre: `Drama`,
  releaseDate: 2014
};

ReactDom.render(
    <App
      genre={PromoFilm.genre}
      releaseDate={PromoFilm.releaseDate}
      MAIN={ROUTER_LINK.MAIN}
      SING_IN={ROUTER_LINK.SING_IN}
      MY_LIST={ROUTER_LINK.MY_LIST}
      FILM={ROUTER_LINK.FILM}
      ADD_REVIEW={ROUTER_LINK.ADD_REVIEW}
      PLAYER={ROUTER_LINK.PLAYER}
    />,
    document.querySelector(`#root`)
);
