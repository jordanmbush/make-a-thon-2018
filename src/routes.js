import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginView from './views/LoginView/LoginView';
import DashBoardView from './views/DashBoardView/DashBoardView';

export default (
  <Switch>
    <Route exact path='/' component={LoginView} />
    <Route path="/dashboard" component={DashBoardView} />
  </Switch>
);
