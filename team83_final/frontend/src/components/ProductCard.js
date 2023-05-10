import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product._id);
    return (
        <Card style={{border: 'solid'}}>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Img src={product.image}></Card.Img>
                <Card.Subtitle style={{padding: 10}}>{product.description}</Card.Subtitle>
                <Card.Text><strong>${product.price}</strong></Card.Text>
                
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product._id, product.price)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product._id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product._id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant='default' style={{background: "#f8ec33", border: 'solid'}} onClick={() => cart.addOneToCart(product._id, product.price)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;