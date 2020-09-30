//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Assets
import App from './components/app';
import Home from './components/home';
import Upload from './components/upload';
import Page404 from './components/page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={Upload} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
