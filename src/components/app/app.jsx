import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import SingIn from "../sing-in/sing-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddNewReview from "../add-new-review/add-new-review";
import Player from "../player/player";
import {MovieType} from "../../types/films";
import {ROUTER_LINK} from "../../constants";
import withMovieList from "../../hoc/with-movie-list/with-movie-list";
const FilmWrapped = withMovieList(Film);


const App = (props) => {

  const {genre, releaseDate, films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTER_LINK.MAIN} exact>
          <Main genre={genre} releaseDate={releaseDate} />
        </Route>
        <Route path={ROUTER_LINK.SING_IN} exact>
          <SingIn />
        </Route>
        <Route path={ROUTER_LINK.MY_LIST} exact>
          <MyList films={films} />
        </Route>
        <Route path={ROUTER_LINK.FILM} exact>
          <FilmWrapped movie={films[0]} films={films} />
        </Route>
        <Route path={ROUTER_LINK.ADD_REVIEW} exact>
          <AddNewReview movie={films[0]}/>
        </Route>
        <Route path={ROUTER_LINK.PLAYER} exact>
          <Player movie={films[0]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(MovieType)),
};

export default App;
