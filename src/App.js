import React, { Component } from "react";
import {Switch, Route } from 'react-router-dom';

//Import components
import Home from "./pages/Home";
import About from "./pages/About";
import Challenge from "./pages/Challenge";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import Forum from "./pages/Forum";
import Events from "./pages/Events";
import Involve from "./pages/Involve";
import Playbook from "./pages/Playbook";
import PastSolution from "./pages/PastSolution";
import Workspace from "./pages/workspace/Workspace";

class App extends Component<{}> {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/challenge' component={Challenge}/>
          <Route exact path='/resources' component={Resources}/>
          <Route exact path='/solution' component={PastSolution}/>
          <Route exact path='/faq' component={FAQ}/>
          <Route exact path='/forum' component={Forum}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/involve' component={Involve}/>
          <Route exact path='/involve/:role' component={Playbook}/>
          <Route exact path='/workspace' component={Workspace}/>
        </Switch>
      </main>
    );
  }
}


export default App;
