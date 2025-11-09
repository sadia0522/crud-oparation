const express = require('express');
const router = express.Router();
const {createProduct ,findProduct} = require('./product.controller');


router.post('/create',createProduct);
router.get('/find',findProduct);
// router.update('/update',updateProduct);


module.exports = router;