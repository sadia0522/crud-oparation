const express = require('express');
const router = express.Router();
const product = require('./src/module/product/product.route');
router.use('/product',product);

module.exports = router;