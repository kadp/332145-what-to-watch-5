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

  const {genre, releaseDate} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main genre={genre} releaseDate={releaseDate} />
        </Route>
        <Route path="/login" exact>
          <SingIn />
        </Route>
        <Route path="/mylist" exact>
          <MyList />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        // `/films/:id` строкой ниже из-за ключа :id
        <Route path="/films/:id" >
          <Film />
        </Route>
        <Route path="/player/:id" exact>
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
