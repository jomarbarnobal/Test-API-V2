const express = require('express');
const Product = require('../models/productModel');


const getAllProducts = (req, res) =>{
    Product.find()
    .then(results => res.json(results))
    .catch(err => console.log(err))
}

const getAProduct = (req, res) =>{
    Product.findById(req.params.id)
    .then(results => res.status(200).json(results))
    .catch(err => console.log(err))
}


const addAProduct = (req, res) =>{
    const newProduct = new Product(req.body);
    newProduct.save()
        .then(results => res.status(201).json({success:true, data: results}))
        .catch(err => console.log(err))
}


module.exports = {getAllProducts, getAProduct, addAProduct}