import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {browserHistory, Route, IndexRoute, Router} from 'react-router';
import Landing from './views/landing';
import SearchResults from './views/search-results';
import Detail from './views/detail';
import MainLayout from './layouts/main';
import SecondaryLayout from './layouts/secondary';
import {Provider} from 'react-redux';
import store from './store';



const Routes =
  <Route path="/" component={App}>
    <Route component={MainLayout}>
      <IndexRoute component={Landing}/>
      <Route path="search" component={SearchResults}/>
      <Route path="search/:pid" component={SearchResults}/>
    </Route>
    <Route component={SecondaryLayout}>
        <Route component={Detail} path="tools/:slug"/>
    </Route>
  </Route>

ReactDOM.render(
  <Provider store={store}>
    <Router routes={Routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
