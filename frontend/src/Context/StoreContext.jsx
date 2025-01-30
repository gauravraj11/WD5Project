import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Dishes } from "../shared/dishes"; // Assuming mock data is still needed

// Create the StoreContext
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const url = "http://localhost:9000"; // Your backend URL

  // State variables
  const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const currency = "₹";

  // Add item to cart
  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });

    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    }
  };

  // Get total amount in cart
  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = food_list.find((dish) => dish.id === parseInt(itemId));
      return item ? total + item.price * cartItems[itemId] : total;
    }, 0);
  };

  // Load food list
  useEffect(() => {
    setFoodList(Dishes); // Using mock data
  }, []);

  // Load cart data from the backend
  const loadCartData = async () => {
    if (token) {
      try {
        const response = await axios.post(
          `${url}/api/cart/get`,
          {},
          { headers: { token } }
        );
        setCartItems(response.data.cartData);
      } catch (error) {
        console.error("Error loading cart data:", error);
      }
    }
  };

  // Reload cart data on token change
  useEffect(() => {
    loadCartData();
  }, [token]);

  // Context value
  const contextValue = {
    food_list,
    cartItems,
    setCartItems, // Expose setCartItems
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken,
    currency,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
