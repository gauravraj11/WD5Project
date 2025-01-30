import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const { token, currency } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!token) {
        alert("Please log in to view your orders.");
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:9000/api/order/get",
          { userId: token },
          { headers: { token } }
        );

        if (response.data.success) {
          setOrders(response.data.orders);
        } else {
          alert("Failed to fetch orders.");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        alert("Error occurred while fetching your orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) {
    return <div className="orders-loading">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return <div className="orders-empty">No past orders found.</div>;
  }

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <div className="order-card" key={order._id}>
          <div className="order-details">
            <p>
              <strong>Order ID:</strong> {order._id}
            </p>
            <p>
              <strong>Date:</strong> {new Date(order.date).toLocaleString()}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Total:</strong> {currency}
              {order.amount}
            </p>
          </div>
          <div className="order-items">
            <h4>Items:</h4>
            {order.items.map((item, index) => (
              <p key={index}>
                {item.name} - {currency}
                {item.price} x {item.quantity}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
