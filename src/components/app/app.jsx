import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import SingIn from "../sing-in/sing-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import {MovieType} from "../../types/films";

const App = (props) => {

  const {routerLink, genre, releaseDate, films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={routerLink.MAIN} exact>
          <Main genre={genre} releaseDate={releaseDate} films={films} />
        </Route>
        <Route path={routerLink.SING_IN} exact>
          <SingIn />
        </Route>
        <Route path={routerLink.MY_LIST} exact>
          <MyList films={films} />
        </Route>
        <Route path={routerLink.FILM} exact>
          <Film movie={films[0]} routerLink={routerLink} />
        </Route>
        <Route path={routerLink.ADD_REVIEW} exact>
          <AddReview movie={films[0]} routerLink={routerLink} />
        </Route>
        <Route path={routerLink.PLAYER} exact>
          <Player movie={films[0]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  routerLink: PropTypes.object.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(MovieType)),
};

export default App;
