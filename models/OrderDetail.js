const mongoose = require("mongoose");

const OrderDetails = new mongoose.Schema({
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    default: 0,
  },
  amount: {
    type: Number,
    required: [true, 'Product Amount is required'],
    default: 0,
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});
module.exports = mongoose.model("OrderDetails", OrderDetails);