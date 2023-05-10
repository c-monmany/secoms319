import {Row, Col} from 'react-bootstrap'
import ProductCard from '../components/ProductCard';
import {useState, useEffect} from 'react';

function Cart() {
    const [product, setProduct] = useState([]);
    
    function getAllProducts() {
        fetch("http://localhost:4000/")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
        
    }
    
    useEffect(() => {
        getAllProducts();
    }, []);
    return (
        <>
            <h1 align="center" classname="p-10" style={{paddingBottom: 50, paddingTop: 50, fontFamily: "Montserrat"}}>Our Menu</h1>
            <Row xs={1} md={3} className="g-4">
                {product.map((product) => (
                <Col align="center" id={product._id}>
                    <ProductCard product={product} />
                </Col>
                ))}
            </Row>
        </>
        )
    }
    export default Cart;
    