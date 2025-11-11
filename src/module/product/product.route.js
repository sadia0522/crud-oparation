const express = require('express');
const router = express.Router();
const {
    createProductcontroller ,
    findProductcontroller, 
    updateProductcontroller,
    deleteProductcontroller 
} = require('./product.controller');


router.post('/create',createProductcontroller);
router.get('/find',findProductcontroller);
router.put('/update/:id',updateProductcontroller);
router.delete('/delete/:id',deleteProductcontroller );


module.exports = router;