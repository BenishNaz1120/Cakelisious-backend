const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config();
// Import routers
const CategoryRouter = require('./Router/CategoryRouter');
const StockRouter =require('./Router/StockRouter')
const OrderRouter = require('./Router/OrderRouter');
const ProductRouter = require('./Router/ProductRouter');

// Initialize Express app
const app = express();

// Set up body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
console.log("Database url", process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const conn = mongoose.connection;
conn.on("open", function () {
  console.log("connected...");
});

// Use routers
app.use("/api/category",CategoryRouter);
app.use("/api/stock",StockRouter);
app.use("/api/order",OrderRouter);
app.use("/api/product",ProductRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
