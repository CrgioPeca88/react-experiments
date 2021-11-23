//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Assets
import App from './components/app';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Upload from './components/upload';
import Page404 from './components/page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/home" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
