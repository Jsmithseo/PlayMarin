import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from  'react-bootstrap/Nav'
import Container from 'react-bootstrap/container'
import Logo from '../images/playMarinLogo.png'

const Header = () => {



  return (
<Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
<Container>
  <Navbar.Brand href="#home">

  <img
                  to="/"
                  width={100}
                  height={42}
                  src={Logo}
                  className="work"
                  style={{
                    marginBottom: "0px"
                  }}
                />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#features">Programs</Nav.Link>
      <Nav.Link href="#features">Support</Nav.Link>
      <Nav.Link href="#features">Contact Us</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
      <Button variant="outline-success">Donate</Button>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header