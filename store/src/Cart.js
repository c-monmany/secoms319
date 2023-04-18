import React, { useState, useEffect } from "react";
import './App.css';
import { products } from './products';
import "bootstrap/dist/css/bootstrap.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CartContext } from "./cartContext";
import { useContext } from "react";
import CartProvider from "./cartContext";
import CartProduct from "./CartProduct";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.css";
import Confirmation from './Confirmation';



function Cart() {
    const cart = useContext(CartContext);
    const initialValues = {username: "", email: "", cardInfo: "", city: "", state: "", zipcode: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        setFormErrors(validate(formValues));
        console.log(Object.keys(formErrors).length != 0);
        console.log(cart.valid);
        if (Object.keys(formErrors).length !== 0 && cart.valid) {
          cart.changeValid(false);
        }
        if (Object.keys(formErrors).length === 0 && !cart.valid) {
          cart.changeValid(true);
        }
        console.log(cart.valid);
        
       
        
    }
    
    const validate = (values) => {
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const regexZip = /^[0-9]{5}(?:-[0-9]{4})?$/g
        const regexCard = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/g

        if (!values.username) {
            errors.username = "Full Name Required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        }
        else if (!regex.test(values.email)) {
            errors.email = "Invalid email"
        }

        if (!values.cardInfo) {
            errors.cardInfo = "Card information required"
        }
        else if (!regexCard.test(values.cardInfo)) {
            errors.cardInfo = "Invaild credentials"
        }

        if (!values.zipcode) {
            errors.zipcode = "Zipcode required";
        }
        else if (!regexZip.test(values.zipcode)) {
            errors.zipcode = "Invalid Zipcode"
        }

        if (!values.state) {
            errors.state = "State Required";
        }
        if (!values.city) {
            errors.city = "City Required";
        }

        return errors;
    }

    

    const handleChange = (e) => {
        const { name ,value } = e.target;
        setFormValues({...formValues, [name]: value});
  
    }

    
    
    return(
        <div>
            <Col sm={12} className='my-5'>
              <h1 className='font-weight-light text-center my-5'>Items in Your Cart</h1>
        </Col>
        <Container>
            <Card>
                <Card.Body>
                    {cart.items.map( (currentProduct, idx) => (
                        <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                    ))}
                    <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
                </Card.Body>
            </Card>

        </Container>
        <br></br>
        <Form   onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full name"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <p style={{color: 'red'}}>{formErrors.username}</p>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p style={{color: 'red'}}>{formErrors.email}</p>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validation">
          <Form.Label>Credit Card</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              aria-describedby="inputGroupPrepend"
              value={formValues.cardInfo}
              name="cardInfo"
              onChange={handleChange}
            />
          </InputGroup>
          <p style={{color: 'red'}}>{formErrors.cardInfo}</p>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City"  value={formValues.city} onChange={handleChange} name="city"/>
          <p style={{color: 'red'}}>{formErrors.city}</p>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" 
           value={formValues.state} onChange={handleChange} name="state"/>
          <p style={{color: 'red'}}>{formErrors.state}</p>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip"  value={formValues.zipcode} onChange={handleChange} name="zipcode"/>
          <p style={{color: 'red'}}>{formErrors.zipcode}</p>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
      </Form.Group>
      <Button type="submit" onClick={handleSubmit}>Check form</Button>
      {
        !cart.valid ? null : <p style={{color: 'green'}}>Form is valid</p>
      }


    </Form>
                        
        </div>


    )
        
        
}


export default Cart;