const express = require('express');
const router = express.Router();
const {createProduct ,findProduct, updateProduct } = require('./product.controller');


router.post('/create',createProduct);
router.get('/find',findProduct);
router.put('/update/:id',updateProduct);


module.exports = router;