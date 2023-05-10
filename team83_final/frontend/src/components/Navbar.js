import {Button, Container, Navbar, Modal, Image, Form, Row, Col, Nav } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import logo from '../myotherimages/Bombay_Deli-removebg-preview.png'
import '../styles.css';
import FoodCarousel from './FoodCarousel';
import Cart from '../pages/Cart';
import AboutUs from '../pages/About_Us';
function NavbarComponent() {

    const cart = useContext(CartContext);
    const [ showOrder, setShowOrder ] = useState(false);
    const [showCheckout, setShowCheckout] = useState(true);
    const [ show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ showHome, setShowHome] = useState(true);
    const [ showMenu, setShowMenu ] = useState(false);
    const [ showAbout, setShowAbout ] = useState(false);

    function handlePage(evt) {
      if(evt.target.name === "home") {
        if (showHome) {

        }
        if (!showHome) {
          setShowHome(true);
          setShowMenu(false);
          setShowAbout(false);
        }
      }
      else if (evt.target.name === "menu") {
          if (showMenu) {

          }

          if (!showMenu) {
            setShowMenu(true);
            setShowHome(false);
            setShowAbout(false);
          }
      }
      else if (evt.target.name === "about") {
        if (showAbout) {

        }

        if (!showAbout) {
          setShowAbout(true);
          setShowHome(false);
          setShowMenu(false);
        }
      }
    }

    const [Order, setOrder] = useState({
        _id: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        cart: [],
        price: 0
    });

    const submitOrder = async () => {
        console.log(Order);
        await fetch('http://localhost:4000/order', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Order)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            if (data) {
                const value = Object.values(data);
                setOrder({...Order, _id: value._id});
                alert("Order has been submitted!");
                window.location.reload(false);
            }
        });
    }
    function handleChange(evt) {
        const value = evt.target.value;
        if (evt.target.name === "email") {
            setOrder({ ...Order, email: value });
        } else if (evt.target.name === "phone") {
            setOrder({ ...Order, phone: value });
        } else if (evt.target.name === "address") {
            setOrder({ ...Order, address: value });
        } else if (evt.target.name === "zip") {
            setOrder({ ...Order, zip: value });
        } else if (evt.target.name === "name") {
            setOrder({...Order, name: value})
        }
        console.log(Order);     
    }

    const checkout = async () => {
        setShowOrder(true);
        setShowCheckout(false);
        Order.cart = cart.items;
        Order.price = cart.getTotalCost();
        console.log(Order.cart);
        console.log(Order.price);
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    return (
        <>
            <header >
            <Navbar className='color-nav'  variant='light' expand="lg" >
                <Image src={logo} style={{width: 90}}  />
                <Navbar.Brand  href="/" style={{fontSize: 35, fontFamily: "Montserrat"}}>Bombay Deli</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Nav.Link name="home" onClick={handlePage}>Home</Nav.Link>
                    <Nav.Link name="menu"onClick={handlePage}>Menu</Nav.Link>
                    <Nav.Link name="about" onClick={handlePage}>About Us</Nav.Link>
            </Nav>
                <Navbar.Collapse className="justify-content-end" style={{padding: 10}}>
                    <Button variant='default' style={{background: "#f8ec33", border: ''}} onClick={handleShow} >Cart ({productsCount} Items)</Button>
                </Navbar.Collapse>
            </Navbar>
            </header>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                                {showCheckout ?
                                    <Button variant="success" onClick={checkout}>
                                        Checkout
                                    </Button>
                                    :
                                    <></>
                                }
                            
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                    {!showOrder || cart.items.length === 0 ?
                        <> 
                           
                        </>
                        :
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail"  >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"  name="email" onChange={handleChange} value={Order.email}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword" >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="phone" placeholder="Phone"  name="phone" onChange={handleChange} value={Order.phone}/>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1" >
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" name="address" onChange={handleChange} value={Order.address}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="John Doe" name="name" onChange={handleChange} value={Order.name}/>
                            </Form.Group>


                                <Form.Group as={Col} controlId="formGridZip" className='mb-3'  >
                                <Form.Label>Zip</Form.Label>
                                <Form.Control  name="zip" onChange={handleChange} value={Order.zip}/>
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={submitOrder}>
                                    Submit
                                </Button> 
                        </Form>
                    }
                </Modal.Body>
            </Modal>

            <Container>
                {showHome && !showMenu ?
                <>
                    <FoodCarousel></FoodCarousel>
                </>
                
                :
                <></>
                }
                {showMenu ?
                    <Cart />
                    :
                    <></>
                }
                {showAbout ?
                <AboutUs />
                :
                <></>
                }
        
            </Container>
        </>
    )

}

export default NavbarComponent;