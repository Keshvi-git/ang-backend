const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String ,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subcategory:  String ,
  brand: String ,
  stock: { type: Number, default: 0 },
  images: [String],
  ratings: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
      rating: { type: Number, min: 1, max: 5 },
      review: { type: String }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
