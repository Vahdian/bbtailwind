import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "../../pages/Landing/LandingPage";
import WelcomePage from "../../pages/Welcome/WelcomePage";
import Navbar from "../../shared/navbar/Navbar";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Navbar></Navbar>
          <LandingPage></LandingPage>
        </Route>
        <Route path="/about-us"></Route>
        <Route path="/app"></Route>
        <Route path="/vegan-lifestyle"></Route>
        <Route path="/contact"></Route>
        <Route path="/">
          <WelcomePage></WelcomePage>
        </Route>
      </Switch>
    </div>
  );
}
