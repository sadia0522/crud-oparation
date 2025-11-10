const Product = require("./product.model");

const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = await Product.create({ name, price });
    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "product create faild !",
    });
  }
};
const findProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, { name, price });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found!" });
    }

    res.status(200).json({
      message: "Product updated successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const deletedProduct = await Product.findOneAndDelete({ name });
    if (!deletedProduct) {
      res.json({ message: "product not found!" });
    }

    res.json({
      message: "product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createProduct, findProduct, updateProduct, deleteProduct };
