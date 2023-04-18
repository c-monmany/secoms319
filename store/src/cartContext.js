import { createContext, useState } from "react";
import { getProductData, products } from "./products";




export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    changeValid: () => {},
    valid: false 

});


export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    const [isValid, setValid] = useState(false);


    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts(
                [...cartProducts, 
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }

        else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id ? { ...product,quantity: product.quantity + 1 } : product
                )
            )
        }
        
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })
        )
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id);
        }
        else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id ? { ...product,quantity: product.quantity - 1 } : product
                )
            )
        }
    }

    function getTotalCost() {
        let total = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            console.log(productData);
            total += (productData.price * cartItem.quantity);

        });

        return total;
        
    }

    function changeValid(e) {
        if (e === true) {
            setValid(e);
        }
        else {
            setValid(e);
        }
    }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart, 
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        changeValid,
        valid: isValid,
    }


    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;