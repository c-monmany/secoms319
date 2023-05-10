import logo from './myotherimages/Bombay_Deli-removebg-preview.png';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Navbar, Modal, Image, Form, Row, Col, Nav} from 'react-bootstrap'
import { CartContext } from './CartContext';
import Cart from './pages/Cart';
import CartProvider from './CartContext';
import FoodCarousel from './components/FoodCarousel';
import { useState, useContext } from 'react';
import CartProduct from './components/CartProduct';
import AboutUs from './pages/About_Us';
import NavbarComponent from "./components/Navbar"


function App() {
  
    


  return (
    <CartProvider>
       <NavbarComponent>
       </NavbarComponent>
      
      <footer>
          <div class="footer-container">
            <div class="footer">
              <div class="footer-heading footer-1">
                <h2>Business Hours</h2>
                <ul>
                  <li>Monday</li>
                  <li>Wednesday</li>
                  <li>Friday</li>
                  <li>Sunday</li>
                </ul>
                <h3>From 7am-2pm</h3>
              </div>
              <div class="footer-heading footer-2">
                <h2>Social Media</h2>
                <a href="https://www.instagram.com/bombay.deli/" target="_blank">Instagram</a>
                <a href="https://t.snapchat.com/w9pd5R0i/" target="_blank">Snapchat</a>
              </div>
            </div>
          </div>
        </footer>
    </CartProvider>
  );
}

export default App;
