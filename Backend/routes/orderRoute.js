const express = require("express");
const { placeOrder, getOrders } = require("../controllers/orderController");
const authMiddleware = require("../middleware/auth");

const orderRouter = express.Router();

// Place an order
orderRouter.post("/place", authMiddleware, placeOrder);

// Get past orders
orderRouter.post("/get", authMiddleware, getOrders);

module.exports = orderRouter;
