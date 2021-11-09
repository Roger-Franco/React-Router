import "./Content.css";
import React from "react";
import {Switch, Route} from 'react-router-dom'

import About from "../../views/examples/About";
import Home from "../../views/examples/Home";

const Content = (props) => {
  return (
      <main className="Content">
        <h1>ola mundo</h1>
        <Switch>
        <Route path="/about" exact component={About}/>
        <Route path="/" exact component={Home}/>
        </Switch>
      </main>
  );
};

export default Content;
