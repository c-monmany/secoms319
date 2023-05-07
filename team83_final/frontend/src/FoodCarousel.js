import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { useState, useEffect } from 'react';

function FoodCarousel() {
    const [product, setProduct] = useState([]);

    function getAllProducts() {
        fetch("http://localhost:4000/")
            .then((response) => response.json())
            .then((data) => {
                console.log("Show Catalog of Products :");
                console.log(data);
                setProduct(data);
            });
        
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    const showAllItems = product.map((el) => {
        
        
    })
    
    return (
        <Carousel>
            {product.map((el) => {
            <Carousel.Item interval={500} key={el.id}>
                <img
                className="d-block w-100"
                src={el.image}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{el.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            })}
        </Carousel>
    )
}

export default FoodCarousel;