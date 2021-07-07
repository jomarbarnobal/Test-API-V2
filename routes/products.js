const express = require('express');
const router = express.Router();

const {getAllProducts, getAProduct, addAProduct, deleteAProduct, updateAProduct} = require('../controllers/products');


router.get('/',getAllProducts)
router.get('/:id',getAProduct)
router.post('/',addAProduct)
router.delete('/:id', deleteAProduct)
router.put('/:id', updateAProduct)
module.exports = router;