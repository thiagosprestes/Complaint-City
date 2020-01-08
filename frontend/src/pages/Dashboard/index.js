import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar';
import Body from '../../components/Body/index'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Dashboard() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function loadPosts() {
            const response = await api.get('/reclamacoes')

            setPosts(response.data)
        }

        loadPosts()
    }, [])

    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Col xs lg="3">
                        <Sidebar />
                    </Col>
                    <Col lg="8">
                        <Body name={posts} />
                    </Col>
                </Row>
            </Container>            
        </>
    )
}
