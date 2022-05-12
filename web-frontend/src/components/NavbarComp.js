import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">QR Receipt</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/receipt/user">Receipts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComp