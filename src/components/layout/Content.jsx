import "./Content.css";
import React from "react";
import {Switch, Route} from 'react-router-dom'

import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";

const Content = (props) => {
  return (
      <main className="Content">
        <Switch>
        <Route path="/about" exact component={About}/>
        <Route path="/param/:id" exact component={Param}/>
        <Route path="/" exact component={Home}/>
        </Switch>
      </main>
  );
};

export default Content;
