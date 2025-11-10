const express = require('express');
const router = express.Router();
const {createProduct ,findProduct, updateProduct,deleteProduct } = require('./product.controller');


router.post('/create',createProduct);
router.get('/find',findProduct);
router.put('/update/:id',updateProduct);
router.delete('/delete/:name',deleteProduct );


module.exports = router;