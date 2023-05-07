import {Row, Col} from 'react-bootstrap'
import { productsArray } from '../productCart';
import ProductCard from '../components/ProductCard';

function Cart() {
    return (
        <>
            <h1 align="center" classname="p-">Welcome to the Cart!</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                <Col align="center" key={idx}>
                    <ProductCard product={product} />
                </Col>
                ))}
            </Row>
        </>
        )
    }
    export default Cart;
    