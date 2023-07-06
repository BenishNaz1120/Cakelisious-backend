const express = require("express");
const router = express.Router();

const ProductController = require("../Controller/ProductController");
router.post("/add_product", ProductController.addProduct);
router.get("/get_products", ProductController.getProducts);
// router.get("/update_status/:id", ProductController.updateStatus)
router.put("/stock_in/:id", ProductController.stockIn);
router.put("/stock_out/:id", ProductController.stockOut);
router
  .route("/:id")
  .get(ProductController.getById)
  .patch(ProductController.updateById)
  .delete(ProductController.deleteById);

module.exports = router;