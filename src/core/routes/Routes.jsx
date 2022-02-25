import React from "react";
import { Routes as Routing, Route } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";

export default function Routes() {
  return (
    <div>
      <Routing>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/homepage" element={<HomePage />} />
      </Routing>
    </div>
  );
}
