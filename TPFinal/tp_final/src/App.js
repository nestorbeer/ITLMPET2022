import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import NavBar from './NavBar';
import ProductsList from './ProductsList';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const {categories} = useParams();
  const [producto, setProducto] = useState()
  
  return (
    <Container>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<h1>Aca vamos a poner un banner</h1>}/>
          <Route path='/categories/:catId' element={<ProductsList id={categories} ></ProductsList>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Container>
  );
}

export default App;
