import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { token, cartItems, food_list, currency } = useContext(StoreContext);
  const [address, setAddress] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const selectedItems = location.state?.selectedFoodItems || [];

  const handlePayment = async () => {
    setIsProcessing(true);
    const itemsDetails = selectedItems.map((itemId) => ({
      id: itemId,
      quantity: cartItems[itemId],
    }));

    const totalAmount = itemsDetails.reduce((total, item) => {
      const foodItem = food_list.find((dish) => dish.id === parseInt(item.id));
      return total + foodItem.price * item.quantity;
    }, 0);

    try {
      const response = await axios.post(
        "http://localhost:9000/api/order/place",
        {
          userId: token, // Assuming `token` contains the user ID
          selectedItems,
          address,
          totalAmount,
          quantity: cartItems,
        },
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        alert("Order placed successfully!");
        navigate("/orders"); // Navigate to orders page
      } else {
        alert("Order placement failed. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error occurred while processing your order.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="placeorder-container">
      <h2>Place Order</h2>
      <textarea
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        rows="4"
        cols="50"
      />
      <div className="order-summary">
        <h3>Order Summary</h3>
        {selectedItems.map((itemId) => {
          const item = food_list.find((dish) => dish.id === parseInt(itemId));
          return (
            <div key={item.id} className="order-item">
              <p>
                {item.name} - {currency}
                {item.price} x {cartItems[itemId]}
              </p>
            </div>
          );
        })}
      </div>
      <button
        className="payment-button"
        onClick={handlePayment}
        disabled={isProcessing || !address.trim()}
      >
        {isProcessing ? "Processing..." : "Pay and Place Order"}
      </button>
    </div>
  );
};

export default PlaceOrder;
