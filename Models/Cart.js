 const mongoose = require("mongoose")
 const { Schema, model, Types } = mongoose

const cartSchema =  mongoose.Schema(
  {   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId, ref: 'Product'
        },
        quantity: {
          type: Number,
          min: 1
        },
      },
    ],
  },
  {timestamps: true})

module.exports= mongoose.model('Cart',cartSchema)