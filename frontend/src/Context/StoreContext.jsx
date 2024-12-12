import { createContext, useEffect, useState } from "react";
import { Dishes } from "../shared/dishes"; // Assuming mock data is still needed

// Create the StoreContext
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
 
  // State variables
  const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const currency = "₹";

  // Load food list
  useEffect(() => {
    setFoodList(Dishes); // Using mock data
  }, []);

  // Context value
  const contextValue = {
    food_list,
    cartItems,
    setCartItems, // Expose setCartItems
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
