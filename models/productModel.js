const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema(
    {
        name:   {type: String},
        details:{type: String},
        price:  {type: Number},
        stocks: {type: Number}
    },{timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;