import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import SingIn from "../sing-in/sing-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddNewReview from "../add-new-review/add-new-review";
import Player from "../player/player";
import {ROUTER_LINK} from "../../constants";
import withMovieList from "../../hoc/with-movie-list/with-movie-list";
import withAddNewReview from "../../hoc/with-add-new-review/with-add-new-review";
import withPlayer from "../../hoc/with-player/with-player";
import PrivateRoute from "../private-route/private-route";


const FilmWrapped = withMovieList(Film);
const AddNewReviewWrapped = withAddNewReview(AddNewReview);
const PlayerWrapped = withPlayer(Player);

const App = ({genre, releaseDate}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTER_LINK.MAIN} exact>
          <Main genre={genre} releaseDate={releaseDate} />
        </Route>
        <Route path={ROUTER_LINK.SING_IN} exact render={({history}) => <SingIn history={history}/>} />

        <PrivateRoute path={ROUTER_LINK.MY_LIST} exact render={() => <MyList />} />

        <Route path={ROUTER_LINK.FILM} exact render={({match}) => <FilmWrapped id={match.params.id} key={match.params.id} />} />

        <PrivateRoute path={ROUTER_LINK.ADD_REVIEW} exact render={() =><AddNewReviewWrapped />} />

        <Route path={ROUTER_LINK.PLAYER} exact>
          <PlayerWrapped />
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
