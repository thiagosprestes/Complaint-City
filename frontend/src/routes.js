import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isLogged } from './services/auth'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import Sidebar from './components/Sidebar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route
        {...rest}
        render={ props => isLogged() ? (<Component {...props} />) : (<Redirect to={{ pathname: '/', state: { from: props.location } }} /> )}
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Container>
                <Row>
                    <Col lg="3">
                        <Sidebar />
                    </Col>
                    <Col lg="8">
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/entrar" component={Login} />
                        <Route exact path="/registrar" component={Register} />
                        <Route exact path="*" component={() => <h1>Page not found</h1>} />
                    </Col>
                </Row>
            </Container>        
        </Switch>
    </BrowserRouter>
)

export default Routes