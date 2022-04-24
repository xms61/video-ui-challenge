import React from 'react'
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function NavBar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
    <Container fluid>
    <Navbar.Brand href="#home">Video UI</Navbar.Brand>
    <Nav className="me-auto my-2 my-lg-0">
    <LinkContainer to={'/overview/'}><Nav.Link href="#home">Overview</Nav.Link></LinkContainer>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar