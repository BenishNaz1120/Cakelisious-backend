const mongoose = require("mongoose");


const Product = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Product Name is required"]
  },
  price: {
    type: Number,
    required: [true,"Product price is required"],
    default: 0,
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
    default: 0,
  },
  status: {
    type: Boolean,
    required: [true, " Status is required"],
    default: true,
  },
  // stock_log: [stockLog],
});

module.exports = mongoose.model("Product", Product);