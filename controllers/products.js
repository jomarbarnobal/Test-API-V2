const express = require('express');
const Product = require('../models/productModel');


const getAllProducts = (req, res) =>{
    Product.find()
    .then(results => res.json(results))
    .catch(err => console.log(err))
}

const getAProduct = (req, res) =>{
    Product.findById(req.params.id)
    .then(results => {
        if (!results){
            return  res.status(404).json({success:false, msg:'id not found'})
        }
        res.status(200).json(results)
    })

    .catch(err => console.log(err))
}


const addAProduct = (req, res) =>{
    const newProduct = new Product(req.body);
    newProduct.save()
        .then(results => res.status(201).json({success:true, data: results}))
        .catch(err => console.log(err))
}
const deleteAProduct = (req, res) =>{
    Product.findByIdAndDelete(req.params.id)
        .then(results => results?res.json({success:true, msg:`product ${req.params.id} has been deleted`}):res.status(404).json({success:false, msg:'id not found'}))
        .catch(err => console.log(err))
}

const updateAProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id,req.body)
        .then(results => {
            if (!results){
               return res.status(404).json({msg:'update failed id not found'})
            }
            res.status(201).json({msg:`updated product id ${req.params.id}`})
        })
        .catch(err => console.log(err))
}

module.exports = {getAllProducts, getAProduct, addAProduct, deleteAProduct, updateAProduct}