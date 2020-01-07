import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function Sidebar() {
    return(
        <Container>
            <Row>
                <Col xs lg="2">
                    <Card>
                        <Card.Body>ABC</Card.Body>
                    </Card>
                </Col>
                <Col col="auto">
                    <Card>
                        <Card.Body>ABC</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
