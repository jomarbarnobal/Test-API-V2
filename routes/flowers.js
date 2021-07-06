const express = require('express');
const router = express.Router();
const {getAllFlowers,getAFlower,addAFlower,deleteAFlower} = require('../controllers/flowers');

router.get('/', getAllFlowers)
router.get('/:id',getAFlower)
router.post('/',addAFlower)
router.delete('/:id',deleteAFlower)

module.exports = router;