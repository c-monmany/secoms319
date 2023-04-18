import './App.css';
import { createContext, useContext, useState } from 'react';
import { products } from './products';
import "bootstrap/dist/css/bootstrap.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/esm/Navbar'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ProductCard from './ProductCard';
import CartProvider from './cartContext';
import { CartContext } from './cartContext';
import Cart from './Cart';
import Confirmation from './Confirmation';
import Store from './Store';




export function App() {
  //counter component
  const [showStore, setShowStore] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showCheck, setCheck] = useState(true);
  const [showSubmit, setSubmit] = useState(false);
  const [showConfirm, setConfirm] = useState(false);
  const [showReturn, setReturn] = useState(false);

  const cart = useContext(CartContext);

  function changePage() {
    if (showStore === true) {
      setShowStore(false);
    }
    else {
      setShowStore(true);
    }
    if (showCart === false) {
      setShowCart(true);
    }
    else {
      setShowCart(false);
    }
    
    if (showCheck === true) {
      setCheck(false);
      setReturn(true);
      setSubmit(true);
    }
    else {
      setCheck(true);
      setReturn(false);
      setSubmit(false);
    }

  }

  function toConfirm() {
    if (showSubmit === true) {
      setSubmit(false);
      setCheck(false);
      setShowCart(false);
      setShowStore(false);
      setReturn(false);
      setConfirm(true);
    }
  }

  //main page
  return (
    <CartProvider>
    <div className='App'>
      <main>
    <header>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand href="#home">Keycap Store</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </header>
        <Container>

            {
              showStore ? <Store />: null
              
            }
            {
              showCheck? <Button size='lg my-5' onClick={() => changePage()}>Checkout</Button> : null
            }
            {
              showReturn ? <Button size='lg my-5' onClick={() => changePage()}>Return to Store</Button> : null
            }
            {
              !showCart ? null : <Cart />
            }
            {
              !showSubmit ? null : <Button size="lg my-5" onClick={() => toConfirm()}>Submit Order</Button>
            }
            {
              !showConfirm ? null : <Confirmation />
            }
             
        </Container>
      </main>

      <footer class="py-5 my-5, bg-dark">
        <Container className='px-4'>
          <p class="text-white">
            Photos and pricing provided by Drop and Etsy
          </p>
        </Container>
      </footer>
    </div>
    </CartProvider>
    
  );

  
}

export default App;
