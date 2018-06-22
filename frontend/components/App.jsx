import React from "react";
import Calendar from "./calendar.jsx";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Route path="/" component={Calendar} />
  </div>
);

export default App;
