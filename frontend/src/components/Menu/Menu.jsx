import React, { useContext } from "react";
import './Menu.css'
import { StoreContext } from "../../Context/StoreContext";

function Menu({dishes}) {
  const { addToCart, currency } = useContext(StoreContext);
  return (
    <div className='dishes-container'>
      {dishes.map((dish) => {
                return (
                  <div className="dish-card" key={dish.id} onClick={() => {}}>
                    <img src={dish.image} alt={dish.name} className="dish-image" />
                    <div className="dish-body">
                      <div className="dish-price">{currency} {dish.price}</div>
                      <h3 className="dish-title">{dish.name}</h3>
                      <button className="add-to-cart-button" onClick={() => addToCart(dish.id)}> Add to Cart </button>
                    </div>
                  </div>
                );
        })}

    </div>
  )
}

export default Menu
