const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  products: [
    {
      productID: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: Number,
  paymentMethod: String,
  status: { type: String, enum: ["pending", "shipped", "delivered", "cancelled"], default: "pending" },
  shippingAddress: {
    type: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
      phone: String,
    },
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema)