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
import ConfirmationProduct from "./ConfirmationProduct";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.css";


function Confirmation() {


    const cart = useContext(CartContext);

    return (
        <div>
            <Col sm={12} className='my-5'>
              <h1 className='font-weight-light text-center my-5'>Order Submitted</h1>
        </Col>
        <Container>
            <Card>
                <Card.Body>
                    {cart.items.map( (currentProduct, idx) => (
                        <ConfirmationProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></ConfirmationProduct>
                    ))}
                    <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
                </Card.Body>
            </Card>

        </Container>
        <Button size="lg my-5" onClick={() => window.location.reload(false)}>Return to Store Page</Button>
        </div>    
        )

}

export default Confirmation;