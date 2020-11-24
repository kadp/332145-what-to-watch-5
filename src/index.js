import React from "react";
import ReactDom from "react-dom";
import {ROUTER_LINK, AuthorizationStatus} from "./constants";
import reviews from "./mock/reviews";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./store/reducers/root-reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";
import {fetchFilmList, checkAuth} from "./store/api-action";
import {requireAuthorization} from "./store/action";


const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchFilmList());
store.dispatch(checkAuth());

const PromoFilm = {
  genre: `Drama`,
  releaseDate: 2014
};

ReactDom.render(
    <Provider store={store}>
      <App
        genre={PromoFilm.genre}
        releaseDate={PromoFilm.releaseDate}
        reviews={reviews}
        routerLink={ROUTER_LINK}
      />
    </Provider>,
    document.querySelector(`#root`)
);
