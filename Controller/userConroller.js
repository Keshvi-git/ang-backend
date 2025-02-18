const Customer = require("../Models/Customer");

const GetAllUsers = async (req, res) => {
  try {
    const data = await Customer.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving customers", error: error.message });
  }
};

const GetByID = async (req, res) => {
  try {
    const data = await Customer.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving customer", error: error.message });
  }
};

const AddUser = async (req, res) => {
  try {
    const data = await Customer.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error creating customer", error: error.message });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const data = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!data) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error updating customer", error: error.message });
  }
};

const DelUser = async (req, res) => {
  try {
    const data = await Customer.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting customer", error: error.message });
  }
};

module.exports = { GetAllUsers, GetByID, AddUser, UpdateUser, DelUser };
