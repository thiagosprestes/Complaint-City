import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

import './styles.css'

export default function Header() {
    return(
        <>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand className="logo">Complaint city</Navbar.Brand>
            </Navbar>
            <br />
        </>
    )
}
