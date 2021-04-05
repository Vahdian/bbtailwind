import React from "react";
import HomePage from "../../pages/HomePage";
import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </div>
  );
}
