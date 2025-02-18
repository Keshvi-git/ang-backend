const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: String,
    description: String ,
    images: [String]
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;