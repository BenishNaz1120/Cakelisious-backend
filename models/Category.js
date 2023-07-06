const mongoose = require("mongoose");


const Category = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Category name is required"],
  },
  status: {
    type: Boolean,
    required: [true,"Category status is required"],
    default: true,
  },

});

module.exports = mongoose.model("Category", Category);