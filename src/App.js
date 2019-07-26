import React, { Component } from "react";
import {Switch, Route } from 'react-router-dom';

//Import components
import Home from "./pages/Home";
import About from "./pages/About";
import Workspace from "./pages/workspace/Workspace";

class App extends Component<{}> {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/workspace' component={Workspace}/>
        </Switch>
      </main>
    );
  }
}


export default App;
