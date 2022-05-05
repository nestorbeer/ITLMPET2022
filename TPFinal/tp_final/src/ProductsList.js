import { Container, ListGroup } from 'react-bootstrap'
import ProductDetail from './ProductDetail'
import './ProductsList.css'

function ProductsList(){
    return(
        <Container>
            <ListGroup>
            <ProductDetail></ProductDetail>
            <ProductDetail></ProductDetail>
            <ProductDetail></ProductDetail>
            <ProductDetail></ProductDetail>
            </ListGroup>
        </Container>
    )
}
export default ProductsList