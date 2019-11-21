import React, { Component } from "react";
import {Switch, Route } from 'react-router-dom';

//Import components
import Home from "./pages/Home";
import Involve from "./pages/Involve";
import Challenge from "./pages/Challenge";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Workspace from "./pages/Workspace";
import Process from "./pages/Resources/Process";
import Stakeholder from "./pages/Resources/Stakeholder";
import Events from "./pages/Events";
import PastSolution from "./pages/PastSolution";
import FeedbackProvider from "./pages/FeedbackProvider";
import Discussion from "./pages/Discussion";


class App extends Component<{}> {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/getinvolved' component={Involve}/>
          <Route exact path='/challenges' component={Challenge}/>
          <Route exact path='/resources' component={Resources}/>
          <Route exact path='/faq' component={FAQ}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/workspace' component={Workspace}/>

          <Route exact path='/resources/process' component={Process}/>
          <Route exact path='/resources/stakeholder' component={Stakeholder}/>
          <Route exact path='/getinvolved/feedback_provider' component={FeedbackProvider}/>
          
          <Route exact path='/solution' component={PastSolution}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/discussion' component={Discussion}/>
        </Switch>
      </main>
    );
  }
}


export default App;
