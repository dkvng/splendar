import React from "react";
import { Route } from "react-router-dom";
import CalendarContainer from "./calendar_container.jsx";

const App = () => (
  <div>
    <Route path="/" component={CalendarContainer} />
  </div>
);

export default App;
