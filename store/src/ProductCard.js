import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from './cartContext';
import { useContext } from 'react';


function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
        <Col>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle>
                 {product.description}
                </Card.Subtitle>
                <Card.Text>
                  <strong>${product.price}</strong>
                </Card.Text>
                { productQuantity > 0 ?
                    <>
                        <Form>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)}className='mx-2'>-</Button>
                                <Button sm="6" onClick={() => cart.addToCart(product.id)}className='mx-2'>+</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)}className='my-2'>Remove From Cart</Button>
                    </>
                    :
                    <Button variant='primary' onClick={() => cart.addToCart(product.id)}>Add to Cart</Button>
                }
              </Card.Body>
            </Card>
          </Col>
    )
}

export default ProductCard;