import React from "react";
import Dashboard from "./Dashboard";
import { Answers } from "./answers";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact={true}>
        <Dashboard />
      </Route>
      <Route path="/answer" exact={true}>
        <Answers />
      </Route>
    </Router>
  );
}

export default App;
