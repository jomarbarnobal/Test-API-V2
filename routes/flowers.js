const express = require('express');
const router = express.Router();

const Flower = require('../models/flowerModel');

router.get('/',(req, res) =>{
    Flower.find()
        .then(results => res.json(results))
        .catch(err => console.log(err))
})
router.get('/:id', (req, res) =>{
    Flower.findById(req.params.id)
        .then(results => res.status(200).json(results))
        .catch(err => console.log(err))
})
router.post('/', (req, res) =>{
    const newFlower = new Flower(req.body);

    newFlower.save()
        .then(results => res.status(201).json({success:true, data:results}))
        .catch(err => console.log(err))
})

module.exports = router;