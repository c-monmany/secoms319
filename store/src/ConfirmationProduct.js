import { Button, Image } from "react-bootstrap";
import { CartContext } from "./cartContext";
import { useContext } from "react";
import { getProductData } from "./products";



function ConfirmationProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);


    return (
        <>
            
            <Image src={productData.image} rounded fluid style={{width: 350}}></Image>
            <h3>
                {productData.title}
            </h3>
            <p>{quantity} x ${productData.price.toFixed(2)} = ${ (quantity * productData.price).toFixed(2)}</p>
            <hr></hr>
        </>
    )

}

export default ConfirmationProduct;