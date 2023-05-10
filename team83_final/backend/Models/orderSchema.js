const { Double } = require('mongodb');
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    id: {
      type: Number,
      ref: 'Product',
      required: true,
    },
    quantity: { type: Number, default: 1 },
    price: {type: Number}
  });


const orderSchema = new mongoose.Schema({
    name: {type: String, require},
    email: {type: String, require},
    phone: {type: String, require },
    address: {type: String, require},
    zip: { type: String, require},
    cart: [cartItemSchema],
    price: {type: Number, default: 0}
}
, {collection: "order_catalog"}
);


module.exports = {
    Order: mongoose.model('Order', orderSchema),
    CartItem: mongoose.model('CartItem', cartItemSchema),
  };