const Product = require("./product.model");

const createProductService = async (name , price) => {
    const newProduct = await Product.create({name , price});
    return newProduct;
};
const findProductService = async () =>{
    const findProduct = await Product.find();
    return findProduct;
};
const updatedProductService = async ( id ,name , price) => {
    const updateProduct = await Product.findByIdAndUpdate(id, {name , price}, {new:true});
    return updateProduct;
};
const deleteProductService = async (id) => {
    const deleteProduct = await Product.findByIdAndDelete(id);
    return deleteProduct;

};

module.exports =  {
    createProductService,
    findProductService,
    updatedProductService,
    deleteProductService
};
