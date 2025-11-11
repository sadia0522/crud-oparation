const express = require('express');
const router = express.Router();
const Product = require('./src/module/product/product.route');
const User = require('./src/module/user/user.route');


router.use('/product',Product);
router.use('/user',User);

module.exports = router;