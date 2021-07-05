const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flowerSchema = new Schema(
    {
       name :   {type:String},
       details: {type:String},
       price:   {type:Number},
       stocks:  {type:Number},
       color:   {type:String}

    },{timestamps:true});

const Flower = mongoose.model("Flower", flowerSchema);

module.exports = Flower;