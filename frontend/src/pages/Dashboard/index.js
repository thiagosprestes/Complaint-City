import React from 'react'

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function Dashboard() {
    return(
        <>
            <Header />
            <Sidebar />
        </>
    )
}
