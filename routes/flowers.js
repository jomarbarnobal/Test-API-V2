const express = require('express');
const router = express.Router();
const {getAllFlowers,getAFlower,addAFlower} = require('../controllers/flowers');

router.get('/', getAllFlowers)
router.get('/:id',getAFlower)
router.post('/',addAFlower)

module.exports = router;