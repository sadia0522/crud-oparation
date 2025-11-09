const productSchema = require('./product.model');

const createProduct = async (req ,res) => {
    try {
       const {name , price}= req.body;
       const newProduct = await productSchema.create({name ,price});
       res.status(201).json({
        message: 'Product created successfully',
        product: newProduct
       });

    } catch (error) {
        res.status(500).json({
            message:"product create faild !"
        });
        
    }
 
};
const findProduct = async (req,res) =>{
    try {
      const product = productSchema.find();
        res.json(product);
        
       
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'server error'});
        
    }
};


module.exports = {createProduct , findProduct}

