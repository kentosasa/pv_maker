import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux';
import mainReducer from './ducks/index';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import Home from './components/template/Home';
import Pinterest from './components/template/Pinterest';
import MovieCreate from './components/template/MovieCreate';
import MovieCreateFinish from './components/template/MovieCreateFinish';
// import Project3 from './components/template/Project3';

import './index.css';

injectTapEventPlugin();

const store = createStore(
  mainReducer,
  applyMiddleware(
    routerMiddleware(browserHistory)
  ),
)

function defaultConnect(component) {
  return connect(
    (state) => state,
  )(component);
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={defaultConnect(App)}>
        <IndexRoute component={defaultConnect(Home)}/>
        <Route path="how" component={defaultConnect(Pinterest)}/>

        <Route path="movie/create" component={defaultConnect(MovieCreate)}/>
        <Route path="movie/finish" component={defaultConnect(MovieCreateFinish)}/>
        {/*<Route path="project3" component={Project3}/>*/}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
