import React from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'

export default function Sidebar() {
    return(
        <>
            <Card>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Nav.Link href="/" className="text-secondary">
                                <span className="far fa-angry fa-lg" style={{paddingRight: "10px"}}></span> Reclamações
                            </Nav.Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Nav.Link href="/" className="text-secondary">
                                <span className="fa fa-plus-circle fa-lg" style={{paddingRight: "10px"}}></span> Reclamar
                            </Nav.Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Nav.Link href="/" className="text-secondary">
                                <span className="fa fa-sign-in-alt fa-lg" style={{paddingRight: "10px"}}></span> Entrar
                            </Nav.Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Nav.Link href="/" className="text-secondary">
                                <span className="fa fa-user-plus fa-lg" style={{paddingRight: "10px"}}></span> Registrar-se
                            </Nav.Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}
