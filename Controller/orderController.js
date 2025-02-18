const Order = require("../Models/Order")

const GetAllOrder = async (req, res) => {
  try {
    const data = await Order.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving orders", error })
  }
}

const IdOrder = async (req, res) => {
  try {
    const data = await Order.findById(req.params.id)
    if (!data) {
      return res.status(404).json({ message: "Order not found" })
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving order", error })
  }
}

const AddOrder = async (req, res) => {
  try {
    const data = await Order.create(req.body)
    res.status(201).json(data)
  } catch (error) {
    res.status(400).json({ message: "Error creating order", error })
  }
}

const UpdateOrder = async (req, res) => {
  try {
    const data = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!data) {
      return res.status(404).json({ message: "Order not found" })
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ message: "Error updating order", error })
  }
}

const DelOrder = async (req, res) => {
  try {
    const data = await Order.findByIdAndDelete(req.params.id)
    if (!data) {
      return res.status(404).json({ message: "Order not found" })
    }
    res.status(200).json({ message: "Order deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error })
  }
}

module.exports = { GetAllOrder, IdOrder, AddOrder, UpdateOrder, DelOrder }
