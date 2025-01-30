const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");

// Place an order
const placeOrder = async (req, res) => {
  try {
    const { userId, selectedItems, address, totalAmount } = req.body;

    // Validate the request
    if (!userId || !selectedItems || !address || !totalAmount) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Get user data
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check if all selected items are in the user's cart
    const userCart = userData.cartData;
    const invalidItems = selectedItems.filter(
      (itemId) => !userCart[itemId] || userCart[itemId] < 1
    );
    if (invalidItems.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Invalid items in cart: ${invalidItems.join(", ")}`,
      });
    }

    // Deduct selected items from user's cart
    selectedItems.forEach((itemId) => {
      delete userCart[itemId];
    });

    // Save updated cart to database
    await userModel.findByIdAndUpdate(userId, { cartData: userCart });

    // Create a new order
    const newOrder = new orderModel({
      userId,
      items: selectedItems.map((itemId) => ({
        itemId,
        quantity: req.body.quantity[itemId],
      })),
      amount: totalAmount,
      address,
      payment: true,
    });

    await newOrder.save();

    return res.json({
      success: true,
      message: "Order placed successfully",
      orderId: newOrder._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get past orders
const getOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    // Fetch all orders for the user
    const orders = await orderModel.find({ userId }).sort({ date: -1 });

    return res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { placeOrder, getOrders };
