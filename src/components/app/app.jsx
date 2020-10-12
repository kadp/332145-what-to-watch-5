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
        <Route exact path="/login">
          <SingIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id?" component={Film} />
        <Route exact path="/films/:id?/review" component={AddReview} />
        <Route exact path="/player/:id?" component={Player} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default App;
