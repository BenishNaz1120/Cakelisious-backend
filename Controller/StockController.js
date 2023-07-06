const Stock = require('../models/Stock');
const Product = require('../models/Product');

// Get all stocks
exports.getAllStocks = async (req, res) => {
    try {
      const stocks = await Stock.find().populate('product');
      res.json(stocks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a specific stock by ID
  exports.getStockById = async (req, res) => {
    try {
      const stock = await Stock.findById(req.params.id).populate('product');
      if (!stock) {
        return res.status(404).json({ message: 'Stock not found' });
      }
      res.json(stock);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new stock
  exports.createStock = async (req, res) => {
    try {
      const { quantity, product } = req.body;
  
      // Check if the referenced product exists
      const existingProduct = await Product.findById(product);
      if (!existingProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      const stock = new Stock({ quantity, product });
      await stock.save();
  
      res.status(201).json(stock);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update a stock
  exports.updateStock = async (req, res) => {
    try {
      const { quantity } = req.body;
  
      const stock = await Stock.findById(req.params.id);
      if (!stock) {
        return res.status(404).json({ message: 'Stock not found' });
      }
  
      stock.quantity = quantity;
      await stock.save();
  
      res.json({
        error: false,
        success_msg: "Data updated successfully",
        response: stock,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete a stock
  exports.deleteStock = async (req, res) => {
    try {
      const stock = await Stock.findByIdAndRemove(req.params.id);
      if (!stock) {
        return res.status(404).json({ message: 'Stock not found' });
      }
  
    //   await stock.remove();
  
      res.json({
        error: false,
        success_msg: "Data deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
//   
  