import React from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { hashHistory } from "react-router";
import Header from "./Header";
import Main from "./Main";
import Howitworks from "./Howitworks";
import Generate from "./Generate";
//import history from "../history";

const App = () => {
  return (
    <div className="ui">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/howitworks" component={Howitworks} />
          <Route path="/generate" component={Generate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
