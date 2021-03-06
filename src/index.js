import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Hello from './hello';
import Itemapp from './item';
import Positionapp from './position';
import * as serviceWorker from './serviceWorker';
const routing = (
  <Router>
    <div>
      <Route exact  path="/" component={Hello} />
      <Route path="/cats" component={App} />
      <Route path="/item" component={Itemapp} />
      <Route path="/position" component={Positionapp} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
