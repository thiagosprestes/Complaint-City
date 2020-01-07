import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isLogged } from './services/auth'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route
        {...rest}
        render={ props => isLogged() ? (<Component {...props} />) : (<Redirect to={{ pathname: '/', state: { from: props.location } }} /> )}
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/registrar" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={() => <h1>SignUp</h1>} />
            <PrivateRoute path="/app" component={() => <h1>App</h1>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes