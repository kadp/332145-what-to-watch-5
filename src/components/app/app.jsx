import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main";
import SingIn from "../sing-in/sing-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import {ROUTER_LINK} from "../../constants.js";

const App = (props) => {

  const {genre, releaseDate} = props;
  const {MAIN, SING_IN, MY_LIST, FILM, ADD_REVIEW, PLAYER} = ROUTER_LINK;

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
};

export default App;
