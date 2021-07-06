const express = require('express');
const Flower = require('../models/flowerModel');

const getAllFlowers =(req, res)=>{
    Flower.find()
        .then(results => res.json(results))
        .catch(err => console.log(err))
}

const getAFlower = (req, res)=>{
    Flower.findById(req.params.id)
    .then(results => res.status(200).json(results))
    .catch(err => console.log(err))
}

const addAFlower = (req, res)=>{
    const newFlower = new Flower(req.body);

    newFlower.save()
        .then(results => res.status(201).json({success:true, data:results}))
        .catch(err => console.log(err))
}

module.exports = {
    getAllFlowers,
    getAFlower, 
    addAFlower
}