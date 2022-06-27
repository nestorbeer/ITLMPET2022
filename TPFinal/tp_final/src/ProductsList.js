import { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import './ProductsList.css'

function ProductsList(props){
    const [productos, setProductos] = useState()
    const {category} = useParams()
    useEffect(function(){
        fetch
        setProductos([])
    },[category])
    return(
        <Container>
            <ListGroup>
            <ProductDetail id='1'></ProductDetail>
            <ProductDetail id={props.id}></ProductDetail>
            <ProductDetail id={props.id}></ProductDetail>
            <ProductDetail id={props.id}></ProductDetail>
            </ListGroup>
        </Container>
    )
}
export default ProductsList