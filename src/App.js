import React, { Component } from "react";
import {Switch, Route } from 'react-router-dom';

//Import components
import Home from "./components/scenes/Home";

class App extends Component<{}> {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </main>
    );
  }
}


export default App;
