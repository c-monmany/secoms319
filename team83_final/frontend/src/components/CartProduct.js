import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";


function CartProduct(props) {
    const [ productData, setProductData] = useState([]);
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    
    function getProductData(id) {
        console.log(id);
        fetch("http://localhost:4000/" + id)
        .then((response) => response.json())
        .then((data) => {
            setProductData(data);
        });
    }

    useEffect(() => {
        getProductData(id);
        
    }, [])

    return (
        <>
            <h3>{productData.name}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;