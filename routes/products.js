const express = require('express');
const router = express.Router();

const {getAllProducts, getAProduct, addAProduct, deleteAProduct} = require('../controllers/products');


router.get('/',getAllProducts)
router.get('/:id',getAProduct)
router.post('/',addAProduct)
router.delete('/:id', deleteAProduct)

module.exports = router;