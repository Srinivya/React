import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../App";

const AddCart = () => {
  const cart = useContext(productContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Cart Items</h2>
        <Link to="/">Back to Home</Link>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Cart Items</h2>
      <Link to="/">Back to Home</Link>
      <div className="cart-container">
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.title} width="100" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCart;
