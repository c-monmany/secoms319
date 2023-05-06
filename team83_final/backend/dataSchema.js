const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    _id: {type: Number},
    name: {type: String},
    price: {type: Number},
    description: {type: String},
    image: {type: String}
}
, {collection: "food_catalog"}
);


const userSchema = new monngoose.Schema({
    _id: {type: Number},
    username: {type: String},
    password: {type: String},
    orders: [foodSchema],
    loggedIn: {type: Boolean}
});

const User = mongoose.model("User", userSchema);

const Product = mongoose.model("Product", foodSchema);
module.exports = {
    Product,
    User
}
