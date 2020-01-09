import React from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

export default function Sidebar() {
    return(
        <>
            <Card>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to="/" className="text-secondary">
                                <span className="far fa-angry fa-lg" style={{paddingRight: "10px"}}></span> Reclamações
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/" className="text-secondary">
                                <span className="fa fa-plus-circle fa-lg" style={{paddingRight: "10px"}}></span> Reclamar
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to="/entrar" className="text-secondary">
                                <span className="fa fa-sign-in-alt fa-lg" style={{paddingRight: "10px"}}></span> Entrar
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/registrar" className="text-secondary">
                                <span className="fa fa-user-plus fa-lg" style={{paddingRight: "10px"}}></span> Registrar-se
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}
