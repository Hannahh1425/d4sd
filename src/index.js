import React from 'react';
import ReactDOM from 'react-dom';
import {  HashRouter } from 'react-router-dom';
import './index.css';
import AppRouter from './App'
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ReactDOM.render(
  <HashRouter>
    <div>
      <AppRouter routes={AppRouter} />
    </div>
  </HashRouter >
  ,
  document.getElementById( 'root' ) );
serviceWorker.unregister();
