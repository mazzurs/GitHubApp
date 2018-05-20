import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/App.css'

import NotFound from './components/notFound/NotFound'
import User from './containers/user/User'
import Users from './containers/users/Users'

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Users}/>
          <Route exact path='/users' component={Users}/>
          <Route path='/user/:login' component={User}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </Router>
    )
  }
}

