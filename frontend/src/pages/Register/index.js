import React, { useState } from 'react'

import api from '../../services/api'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export default function Register({ history }) {
    const [ email, setEmail ] = useState('')
    const [ username, setUsuario ] = useState('')
    const [ password, setSenha ] = useState('')
    const [ erro, setErro ] = useState('')

    async function handleSignUp(event) {
        event.preventDefault()
        if (!email || !username || !password) {
            setErro('Preencha todos os campos')
        } else {
            try {
                await api.post('/registrar-se', { username, email, password })
                history.push('/')
            } catch (error) {
                console.log(error)
                setErro('Ocorreu um erro ao registrar-se')
            }
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h3 className="text-center">Registrar-se</h3>
                            <Form onSubmit={handleSignUp}>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Nome de usuário" value={username} onChange={event => setUsuario(event.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="password" placeholder="Senha" value={password} onChange={event => setSenha(event.target.value)} />
                                </Form.Group>
                                {erro && <Alert variant="danger">{erro}</Alert>}
                                <Button type="submit" variant="primary" block>Cadastrar</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <a href="/registrar" className="text-center">Já tem uma conta? entre agora mesmo</a>
                </Col>
            </Row>
        </Container>
    ) 
}
