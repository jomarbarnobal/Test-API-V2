const express = require('express');
const router = express.Router();

const {getAllProducts, getAProduct, addAProduct} = require('../controllers/products');


router.get('/',getAllProducts)
router.get('/:id',getAProduct)
router.post('/',addAProduct)

module.exports = router;