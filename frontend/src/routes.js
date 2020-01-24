import React from 'react'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'

import { isLogged, logout } from './services/auth'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Reclamacao from './pages/Reclamacao'
import Reclamar from './pages/Reclamar'
import ReclamacoesUser from './pages/ReclamacoesUser'

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

const loggedOut = () => {
    if (window.confirm('Tem certeza que deseja sair?')) {
        logout()
        window.location.href = '/'
    }
}

const Routes = () => (
    <BrowserRouter>
        <Container>
            <Row>
                <Col lg="3">
                    {!isLogged() && (
                    <Sidebar>
                        <li className="list-group-item">
                            <Link to="/entrar" className="text-secondary">
                                <span className="fa fa-sign-in-alt fa-lg" style={{paddingRight: "10px"}}></span> Entrar
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/registrar" className="text-secondary">
                                <span className="fa fa-user-plus fa-lg" style={{paddingRight: "10px"}}></span> Registrar-se
                            </Link>
                        </li>
                    </Sidebar>
                    )}

                    {isLogged() && (
                        <Sidebar>
                            <li className="list-group-item">
                                <Link to="#" onClick={loggedOut} className="text-secondary">
                                    <span className="fa fa-sign-out-alt fa-lg" style={{paddingRight: "10px"}}></span> Sair
                                </Link>
                            </li>
                        </Sidebar>
                    )}
                </Col>
                <Col lg="8">
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/entrar" component={Login} />
                        <Route path="/registrar" component={Register} />
                        <Route path="/reclamacoes/:id" component={Reclamacao} />
                        <PrivateRoute path="/reclamar" component={Reclamar} />
                        <PrivateRoute path="/suas-reclamacoes" component={ReclamacoesUser} />
                        <Route component={() => <h1>Página não encontrada</h1>} />    
                    </Switch>
                </Col>
            </Row>
        </Container>            
    </BrowserRouter>
)

export default Routes