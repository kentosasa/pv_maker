import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import './index.css';
import Home from './components/template/Home';
import Pinterest from './components/template/Pinterest';
import Create from './components/template/Create';
import Project3 from './components/template/Project3';

injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="how" component={Pinterest}/>
      <Route path="create" component={Create}/>
      <Route path="project3" component={Project3}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
