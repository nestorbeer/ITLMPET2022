import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import NavBar from './NavBar';
import ProductsList from './ProductsList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container> 
      <NavBar></NavBar>
      <h1>Aca vamos a poner un banner</h1>
      <ProductsList></ProductsList>
      <Footer></Footer>
    </Container>
  );
}

export default App;
