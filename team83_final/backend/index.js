const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Models/productSchema");
const {Order, cartItem} = require("./Models/orderSchema");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app.use("/images", express.static("images"));

mongoose.connect("mongodb://127.0.0.1:27017/delidata",
    {
        dbName: "delidata",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const port = process.env.PORT || 4000;
const host = "localhost";
app.listen(port, () => {
    console.log(`App listening at http://%s:%s`, host, port)
});


app.get("/", async (req, res) => {
    const query = {};
    const allProducts = await Product.find(query);
    console.log(allProducts);
    res.send(allProducts);
});

app.get("/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const oneProduct = await Product.findOne(query);
    console.log(oneProduct);
    res.send(oneProduct);
})

//gets cart of customer
// app.get('/order/:id', async (req, res) => {
//     try {
//       // Find the order with the specified ID
//       const order = await Order.findById(req.params.id);
      
//       if (!order) {
//         // If the order is not found, return a 404 response
//         return res.status(404).send('Order not found');
//       }
      
//       // Return the order data as a response
//       res.json(order);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error getting order data');
//     }
// });

// creates new order
app.post("/order", async (req, res) => {
    try {
        const order = new Order ({
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            zip: req.body.zip,
            price: req.body.price,
            cart: req.body.cart
        });

        const savedOrder = await order.save();

        res.json(savedOrder);
    }

    catch (error) {
        console.error(error);
        res.status(500).send('Error creating order');
    }
});

// retrieves cart data from order
// app.get("/order/:id/cart", async (req, res) => {
//     try {

//         const order = await Order.findById(req.params.id);

//         if (!order) {

//             return res.status(404).send('Order not found');
//         }

//         res.json(order.cart);
//     }

//     catch (error) {
//         console.error(error);
//         res.status(500).send('Error getting cart data');
//       }
// });

// app.post("/order/:id/cart/", async (req, res) => {
//     try {
//         // Find the order with the specified ID
//         const order = await Order.findById(req.params.id);
        
//         if (!order) {
//           // If the order is not found, return a 404 response
//           return res.status(404).send('Order not found');
//         }
    
//         // Get the product ID and quantity from the request body
//         const productId = req.body.product;
//         const quantity = req.body.quantity || 1;
        
//         const product = await Product.findById(productId);
        
//         console.log(product);

//         // Check if the product is already in the cart
//         const cartItem = order.cart.find(item => item.product === product._id);
        
//         if (cartItem) {
//           // If the product is already in the cart, increase the quantity
//           cartItem.quantity += 1;
//         } else {
//           // Otherwise, add a new cart item to the cart
//           order.cart.push({ product: productId, quantity: 1, price: product.price });
//         }
    
//         // Recalculate the total price of the order
//         order.price = order.cart.reduce((total, item) => {
//           const productPrice = item.price;
//           return total + (productPrice * item.quantity);
//         }, 0);
    
//         // Save the updated order data to the database
//         await order.save();
    
//         // Return the updated order data as a response
//         res.json(order);
//       } catch (error) {
//         console.error(error);
//         res.status(500).send('Error updating order data');
//       }
// })

// app.delete("/order/:orderId/cart/", async (req, res) => {
//     try {
//         const order = await Order.findById(req.params.orderId);

//         if (!order) {
//             // If the order is not found, return a 404 response
//             return res.status(404).send('Order not found');
//         }

//         const productId = req.body.product;
//         const product = await Product.findById(productId);
        
//         console.log(product);

//         // Check if the product is already in the cart
//         const cartItem = order.cart.find(item => item.product === product._id);
        
//         if (cartItem > 1) {
//           // If the product is already in the cart, decrease the quantity
//           cartItem.quantity -= 1;
//         } else {
//           // Otherwise, add a new cart item to the cart
//           order.cart.remove(cartItem);
//         }

//         order.price = order.cart.reduce((total, item) => {
//             const productPrice = item.price || 0;
//             return total + (productPrice * item.quantity);
//         }, 0);

//         await order.save();
    
//         // Return the updated order data as a response
//         res.json(order);
//       } catch (error) {
//         console.error(error);
//         res.status(500).send('Error updating order data');
//       }
// });




