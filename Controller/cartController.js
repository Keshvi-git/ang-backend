const Cart = require("../Models/Cart")

const GetAll = async (req, res) => {
  try {
    const data = await Cart.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving carts", error })
  }
}

const GetID = async (req, res) => {
  try {
    const data = await Cart.findById(req.params.id)
    if (!data) {
      return res.status(404).json({ message: "Cart not found" })
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cart", error })
  }
}

const Add = async (req, res) => {
  try {
    const data = await Cart.create(req.body)
    res.status(201).json(data)
  } catch (error) {
    res.status(400).json({ message: "Error adding cart", error })
  }
}

const Update = async (req, res) => {
  try {
    const data = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!data) {
      return res.status(404).json({ message: "Cart not found" })
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ message: "Error updating cart", error })
  }
}

const Delete = async (req, res) => {
  try {
    const data = await Cart.findByIdAndDelete(req.params.id)
    if (!data) {
      return res.status(404).json({ message: "Cart not found" })
    }
    res.status(200).json({ message: "Cart deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting cart", error })
  }
}

module.exports = { GetAll, GetID, Add, Update, Delete }
