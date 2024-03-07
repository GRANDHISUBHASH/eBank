import {Switch, Redirect, Route} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './components/HomePage'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={HomePage} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
