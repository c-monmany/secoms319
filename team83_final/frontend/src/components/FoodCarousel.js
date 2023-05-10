import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';

function FoodCarousel() {
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

    const showAllItems = product.map((el) => (
        <Carousel.Item interval={2000} className=''>
            <Image 
                className="d-block w-100"
                src={el.image}
                alt={el.name}
            />
            <Carousel.Caption>
                <h3>{el.name}</h3>
            </Carousel.Caption>
                
        </Carousel.Item>
    ))
    
    
    return (
        <div>
            <h1 style={{textAlign: 'center', padding: 30, fontFamily: 'Montserrat', fontSize: 65}}>Welcome to Bombay Deli</h1>
            <Container>
            <Carousel style={{border: 'solid'}}>
                {showAllItems}
            </Carousel>
        </Container>
        
        </div>
        
       
    )
}

export default FoodCarousel;