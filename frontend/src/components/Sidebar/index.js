import React from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import profilePicture from '../../assets/default-profile-picture.jpg'

import { Link } from 'react-router-dom'

import { Imagem } from './styles'

export default function Sidebar(props) {
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
                            <Link to="/suas-reclamacoes" className="text-secondary">
                                <span className="far fa-comment-dots fa-lg" style={{paddingRight: "10px"}}></span> Suas reclamações
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/reclamar" className="text-secondary">
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
                        {props.children}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}
