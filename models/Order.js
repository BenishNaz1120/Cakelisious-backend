const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  customer_Name: {
    type: String,
    required: [true, "Customer name is required"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  total_Price: {
    type: Number,
    required: [true, "Total price is required"]
  },
  delivery_Charges: {
    type: Number,
    required: [true, "Delivery charges is required"]
  },
 Order_Detail: { type: mongoose.Schema.Types.ObjectId, ref: "OrderDetail" },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"]
  }
});

// Create the order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
