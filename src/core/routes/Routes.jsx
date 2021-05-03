import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "../../pages/Landing/LandingPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <LandingPage></LandingPage>
        </Route>
        <Route path="/about-us"></Route>
        <Route path="/app"></Route>
        <Route path="/vegan-lifestyle"></Route>
        <Route path="/contact"></Route>
        <Route path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </div>
  );
}
