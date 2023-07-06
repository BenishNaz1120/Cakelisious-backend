const express = require('express');
const router = express.Router();
const orderController = require('../Controller/OrderController');


router.post('/add_order', orderController.createOrder);
router.get('/get_orders', orderController.getAllOrders);

router
  .route("/:id")
  .get( orderController.getOrderById)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);
module.exports = router;
