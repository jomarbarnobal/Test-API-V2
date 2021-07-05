const express = require('express');
const router = express.Router();

const Product = require('../models/productModel');


router.get('/',(req, res) =>{
    Product.find()
        .then(results => res.json(results))
        .catch(err => console.log(err))
})
router.get('/:id', (req, res)=>{
    Product.findById(req.params.id)
        .then(results => res.status(200).json(results))
        .catch(err => console.log(err))
})

router.post('/',(req, res) =>{
    
    // res.send(console.log('req.body'))
    const newProduct = new Product(req.body);

    newProduct.save()
        .then(results => res.status(201).json({success:true, data: results}))
        .catch(err => console.log(err))
})

module.exports = router;