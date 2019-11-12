import React from 'react'
import {Switch, Route} from 'react-router-dom'

import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'


import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

export default function Routes(){
  return (
    <Switch>
      <Route exact path="/" componenct={SingIn}/>
      <Route  path="/register" componenct={SingUp}/>

      <Route  path="/dashboard" componenct={Dashboard}/>
      <Route  path="/profile" componenct={Profile}/>
    </Switch>
  )
}
