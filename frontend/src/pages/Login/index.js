import React, { useState } from 'react'

import api from '../../services/api'
import { login } from '../../services/auth'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import Header from '../../components/Header/index'

export default function Login({ history }) {
    const [ email, setEmail ] = useState('')
    const [ password, setSenha ] = useState('')
    const [ erro, setErro ] = useState('')

    async function handleSignIn(event) {
        event.preventDefault()
        if (!email || !password) {
            setErro('Preencha todos os campos')
        } else {
            try {
                const response = await api.post('/entrar', { email, password })
                login(response.data.token)
                history.push('/dashboard')
            } catch (error) {
                setErro('Usuário ou senha incorretos')
            }
        }
    }

    return (
            <>
                <Header />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <h3 className="text-center">Login</h3>
                                    <Form onSubmit={handleSignIn}>
                                        <Form.Group>
                                            <Form.Control type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="password" placeholder="Senha" value={password} onChange={event => setSenha(event.target.value)} />
                                        </Form.Group>
                                        {erro && <Alert variant="danger">{erro}</Alert>}
                                        <Button type="submit" variant="primary" block>Entrar</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                            <a href="/registrar" className="text-center">Não tem uma conta? registre-se agora mesmo</a>
                        </Col>
                    </Row>
                </Container>
            </>
    ) 
}
