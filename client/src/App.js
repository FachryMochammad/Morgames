import "./App.css";
import React from "react";
import { Home, GameDetail, Favorite } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/games/:id">
          <GameDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
