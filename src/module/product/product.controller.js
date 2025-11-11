const {createProductService, findProductService, updatedProductService,deleteProductService} = require('./product.service');

const createProductcontroller = async (req,res) =>{
  try {
    const {name,price} = req.body;
    const newProduct = await createProductService(name,price);
    res.status(201).json({
      message:'new product created seccessfully',
      product:newProduct,
    });
    
  } catch (error) {
    res.status(500).json({ message: ' product creation  failed !'});
    
  }
  
};
const findProductcontroller = async ( req,res) => {
  try {
    const findProduct = await findProductService();
    res.status(201).json({findProduct});
    
  } catch (error) {
    res.status(500).json({message: " product not found"})
    
  }
 
};
const updateProductcontroller = async (req,res) => {
  try {
    const {id} = req.params;
    const {name, price} = req.body;
    const updateProduct = await updatedProductService(id, name ,price);
    if (!updatedProductService) {
      return res.status(404).json({message: "update failed product not found !"});
    }
      res.json({message: 'product updated successfully',
      product: updateProduct,
    });
  
  
  } catch (error) {
    res.status(500).json({message: 'server error'});

    
  }

};
const deleteProductcontroller = async (req,res) => {
  try {
    const {id} = req.params;
    const deleteProduct = await deleteProductService(id);
    if (!deleteProduct){
      return res.status(404).json({message: 'product not found !'});

    }
    res.status(200).json({message: ' product Deleted successfully',
      product:deleteProduct,
    });
    
  } catch (error) {
    res.status(500).json({message: 'server error'});
    
  }

};

module.exports = { createProductcontroller, findProductcontroller, updateProductcontroller, deleteProductcontroller };
 