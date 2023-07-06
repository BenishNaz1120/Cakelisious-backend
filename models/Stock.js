const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: false,
    default: 0,
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});
module.exports = mongoose.model("Stock", StockSchema);