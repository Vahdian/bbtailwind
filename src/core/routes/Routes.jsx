import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "../../pages/Landing/LandingPage";
import WelcomePage from "../../pages/Welcome/WelcomePage";
import Navbar from "../../shared/navbar/Navbar";
import Veganlifestyle from "../../pages/veganlifestyle/Veganlifestyle";
import AppPage from "../../pages/appPage/AppPage";
import Contact from "../../pages/contact/Contact";
import AboutUs from "../../pages/aboutUs/AboutUs";
import TransitionPlans from "../../pages/transitionPlans/TransitionPlans";

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
          <AboutUs></AboutUs>
        </Route>
        <Route path="/transition-plans">
          <Navbar></Navbar>
          <TransitionPlans></TransitionPlans>
        </Route>
        <Route path="/app">
          <Navbar></Navbar>
          <AppPage></AppPage>
        </Route>
        <Route path="/vegan-lifestyle">
          <Navbar></Navbar>
          <Veganlifestyle></Veganlifestyle>
        </Route>
        <Route path="/contact">
          <Navbar></Navbar>
          <Contact></Contact>
        </Route>
        <Route path="/">
          <WelcomePage></WelcomePage>
        </Route>
      </Switch>
    </div>
  );
}
