const Order = require('../models/Order');

// Create a new order
exports.createOrder= async (req, res) => {
  // const { customerName, phone, email, address, totalPrice, deliveryCharges, orderDetail, quantity } = req.body;

  try {
    const order = new Order({
      customer_Name:req.body.customer_Name,
      phone:req.body.phone,
      email:req.body.email,
      address:req.body.address,
      total_Price:req.body.total_Price,
      delivery_Charges:req.body.delivery_Charges,
      order_Detail:req.body.order_Detail,
      quantity:req.body.quantity,
    });

    const savedOrder = await order.save();

    res.status(201).json({
      error: false,
      success_msg: 'Data submitted successfully',
      response: savedOrder
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      
      error_msg: 'Failed to create order',
      response: error.toString()
    });
  }
}

// Get all orders
exports.getAllOrders= async (req, res) =>{
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      error: true,
      error_msg: 'Failed to retrieve orders',
      response: error.toString()
    });
  }
}

// Get a specific order by ID
exports.getOrderById= async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      error: true,
      error_msg: 'Failed to retrieve order',
      response: error.toString()
    });
  }
}

// Update an order
exports.updateOrder= async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findByIdAndUpdate(orderId, req.body, { new: true });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({
      error: false,
      success_msg: "Data updated successfully",
      response: order,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      error_msg: 'Failed to update order',
      response: error.toString()
    });
  }
}

// Delete an order
exports.deleteOrder= async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findByIdAndRemove(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({
      error: false,
      success_msg: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      error_msg: 'Failed to delete order',
      response: error.toString()
    });
  }
}

