import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h3 className="text-center">Login</h3>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="password" placeholder="Senha" />
                                </Form.Group>
                                <Button variant="primary" block>Entrar</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    ) 
}
