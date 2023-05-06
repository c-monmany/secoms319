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


const Product = mongoose.model("Product", foodSchema);
module.exports = Product
