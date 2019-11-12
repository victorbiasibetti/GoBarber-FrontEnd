import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact componenct={SignIn} />
      <Route path="/register" componenct={SignUp} />

      <Route path="/dashboard" componenct={Dashboard} isPrivate />
      <Route path="/profile" componenct={Profile} isPrivate />
    </Switch>
  );
}
