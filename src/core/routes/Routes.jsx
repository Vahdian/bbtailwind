import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "../../pages/Landing/LandingPage";
import WelcomePage from "../../pages/Welcome/WelcomePage";
import Navbar from "../../shared/navbar/Navbar";
import Veganlifestyle from "../../pages/veganlifestyle/Veganlifestyle";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Navbar></Navbar>
          <LandingPage></LandingPage>
        </Route>
        <Route path="/about-us">
          <Navbar></Navbar>
        </Route>
        <Route path="/app">
          <Navbar></Navbar>
        </Route>
        <Route path="/vegan-lifestyle">
          <Navbar></Navbar>
          <Veganlifestyle></Veganlifestyle>
        </Route>
        <Route path="/contact">
          <Navbar></Navbar>
        </Route>
        <Route path="/">
          <WelcomePage></WelcomePage>
        </Route>
      </Switch>
    </div>
  );
}
