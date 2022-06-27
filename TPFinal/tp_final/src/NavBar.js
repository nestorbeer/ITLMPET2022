import './NavBar.css'
import  {Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function NavBar(){
    return(
      <Container>
        <Navbar bg="dark" variant="dark">
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/1">Cat 1</Link>
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/2">Cat 2</Link>
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/catId:3">Cat 3</Link>
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/categories/catId:4">Cat 4</Link>
        <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/">HOME</Link>
      </Navbar>
      </Container>
    )
}

export default NavBar