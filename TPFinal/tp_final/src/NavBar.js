import './NavBar.css'
import  {Container, Nav, Navbar } from 'react-bootstrap'

function NavBar(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav.Link href="#cat-1">Cat 1</Nav.Link>
          <Nav.Link href="#cat-2">Cat 2</Nav.Link>
          <Nav.Link href="#cat-3">Cat 3</Nav.Link>
          <Nav.Link href="#cat-4">Cat 4</Nav.Link>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Mi empresa
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavBar