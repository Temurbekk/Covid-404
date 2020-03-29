import React from "react";
import NavBar from "./Components/NavBar";

import Home from "./Components/Pages/Home";
import Data from "./Components/Pages/Data";
import Food from "./Components/Pages/Food";
import News from "./Components/Pages/News";
import Support from "./Components/Pages/Support";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Data" component={Data} />
          <Route path="/Food" component={Food} />
          <Route path="/News" component={News} />
          <Route path="/Support" component={Support} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
