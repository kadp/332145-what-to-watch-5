import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main";
import SingIn from "../sing-in/sing-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {

  const {MAIN, SING_IN, MY_LIST, FILM, ADD_REVIEW, PLAYER, genre, releaseDate} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={MAIN}>
          <Main genre={genre} releaseDate={releaseDate} />
        </Route>
        <Route path={SING_IN} exact>
          <SingIn />
        </Route>
        <Route path={MY_LIST} exact>
          <MyList />
        </Route>
        <Route path={FILM} exact>
          <Film />
        </Route>
        <Route path={ADD_REVIEW} exact>
          <AddReview />
        </Route>
        <Route path={PLAYER} exact>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  MAIN: PropTypes.string.isRequired,
  SING_IN: PropTypes.string.isRequired,
  MY_LIST: PropTypes.string.isRequired,
  FILM: PropTypes.string.isRequired,
  ADD_REVIEW: PropTypes.string.isRequired,
  PLAYER: PropTypes.string.isRequired,
};

export default App;
