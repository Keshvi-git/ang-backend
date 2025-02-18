const Product = require("../Models/Product");

const GetAllPro = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products", error: error.message });
  }
};

const IdProduct = async (req, res) => {
  try {
    const data = await Product.findById({category: categoryId});
    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product", error: error.message });
  }
};

const AddPro = async (req, res) => {
  try {
    const data = await Product.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error adding product", error: error.message });
  }
};

const UpdatePro = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error updating product", error: error.message });
  }
};

const DelProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};

module.exports = { GetAllPro, IdProduct, AddPro, UpdatePro, DelProduct };
