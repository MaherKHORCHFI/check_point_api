import React from 'react'
import { Navbar,Nav,Button,Form,FormControl } from 'react-bootstrap';


const NavBar = () =>{
    return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link> */}
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search user.." className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </>
    )
}

export default NavBar