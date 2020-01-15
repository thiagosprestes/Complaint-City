import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isLogged } from './services/auth'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Reclamacao from './pages/Reclamacao'
import Reclamar from './pages/Reclamar'

import Sidebar from './components/Sidebar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route
        {...rest}
        render={ props => isLogged() ? (<Component {...props} />) : (<Redirect to={{ pathname: '/entrar', state: { from: props.location } }} /> )}
    />
)

const Routes = () => (
    <BrowserRouter>
        <Container>
            <Row>
                <Col lg="3">
                    <Sidebar />
                </Col>
                <Col lg="8">
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/entrar" component={Login} />
                        <Route path="/registrar" component={Register} />
                        <Route path="/reclamacoes/:id" component={Reclamacao} />
                        <PrivateRoute path="/reclamar" component={Reclamar} />
                        <Route component={() => <h1>Página não encontrada</h1>} />    
                    </Switch>
                </Col>
            </Row>
        </Container>            
    </BrowserRouter>
)

export default Routes