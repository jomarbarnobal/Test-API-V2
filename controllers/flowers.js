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

const deleteAFlower = (req, res)=>{
    Flower.findByIdAndDelete(req.params.id)
        .then(results => res.json({success:true, msg:`${req.params.id} is deleted`}))
        .catch(err => console.log(err))
}
const updateAFlower = (req, res)=>{
    Flower.findByIdAndUpdate(req.params.id, req.body)
        .then(results => {
            if (!results){
              return res.status(404).json({msg:'update failed id not found'})
            }
            res.status(201).json({msg:`updated product id ${req.params.id}`})
        })
}
module.exports = {
    getAllFlowers,
    getAFlower, 
    addAFlower,
    deleteAFlower,
    updateAFlower,
}