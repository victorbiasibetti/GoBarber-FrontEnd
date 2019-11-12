import React from 'react'
import {Swith, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'


import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

export default function Routes(){
  return (
    <Swith>
      <Route exact path="/" componenct={SignIn}/>
      <Route  path="/register" componenct={SignUp}/>

      <Route  path="/dashboard" componenct={Dashboard}/>
      <Route  path="/profile" componenct={Profile}/>
    </Swith>
  )
}
