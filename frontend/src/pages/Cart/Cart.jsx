import React, { useContext, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    currency,
    token,
  } = useContext(StoreContext);
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();

  const toggleSelectItem = (itemId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const buySelectedItems = async () => {
    const selectedFoodItems = Object.keys(selectedItems).filter(
      (itemId) => selectedItems[itemId]
    );

    if (selectedFoodItems.length === 0) {
      alert("Please select items to buy.");
      return;
    }

    // Navigate to PlaceOrder with selected items
    navigate("/placeorder", { state: { selectedFoodItems } });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {Object.keys(cartItems).map((itemId) => {
            const item = food_list.find(
              (dish) => dish.id === parseInt(itemId)
            );
            return item ? (
              <div className="cart-item" key={item.id}>
                <input
                  type="checkbox"
                  checked={!!selectedItems[item.id]}
                  onChange={() => toggleSelectItem(item.id)}
                />
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>
                    {currency}
                    {item.price} x {cartItems[item.id]}
                  </p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : null;
          })}
          <button className="buy-button" onClick={buySelectedItems}>
            Buy Selected
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
