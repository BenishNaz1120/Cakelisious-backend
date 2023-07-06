const express = require('express');
const router = express.Router();
const stockController = require('../Controller/StockController');


router.get('/get-stocks', stockController.getAllStocks);
router.post('/add-stock', stockController.createStock);


router
  .route("/:id")
  .get(stockController.getStockById)
  .patch(stockController.updateStock)
  .delete(stockController.deleteStock);

module.exports = router;
