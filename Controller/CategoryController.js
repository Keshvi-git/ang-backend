const Category = require("../Models/Category");

const GetAllCat = async (req, res) => {
  try {
    const data = await Category.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving Category", error: error.message });
  }
};

const IdCat = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving Category", error: error.message });
  }
};

const AddCat = async (req, res) => {
  try {
    const data = await Category.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error adding Category", error: error.message });
  }
};

const UpdateCat = async (req, res) => {
  try {
    const data = await Category.findByIdAndUpdate(req.params.id, req.body);
    if (!data) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error updating Category", error: error.message });
  }
};

const DelCat = async (req, res) => {
  try {
    const data = await Category.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Category", error: error.message });
  }
};

module.exports = { GetAllCat, IdCat, AddCat, UpdateCat, DelCat };
