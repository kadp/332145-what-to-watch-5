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

  const {routerLink, genre, releaseDate, films, reviews} = props;

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
          <Film />
        </Route>
        <Route path={routerLink.ADD_REVIEW} exact>
          <AddReview reviews={reviews} />
        </Route>
        <Route path={routerLink.PLAYER} exact>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  routerLink: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
