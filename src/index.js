import React from "react";
import ReactDom from "react-dom";
import {ROUTER_LINK} from "./constants";
import films from "./mock/films";
import reviews from "./mock/reviews";
import App from "./components/app/app";
import {createStore} from "redux";
import {reducer, initialState} from "./store/reducer";
import {Provider} from "react-redux";


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const PromoFilm = {
  genre: `Drama`,
  releaseDate: 2014
};

ReactDom.render(
    <Provider store={store}>
      <App
        genre={PromoFilm.genre}
        releaseDate={PromoFilm.releaseDate}
        films={films}
        reviews={reviews}
        routerLink={ROUTER_LINK}
      />
    </Provider>,
    document.querySelector(`#root`)
);
