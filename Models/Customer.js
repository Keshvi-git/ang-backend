 const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
  name: String,
  password:String,
  email: { type: String, unique: true},
  phone: Number,
  address: [
    {
      type: { type: String, enum: ["home", "work"] },
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
  ],
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  createdAt: { type: Date },
  updatedAt: { type: Date},
});

module.exports= mongoose.model('Customer',customerSchema)

