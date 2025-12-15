// src/components/CartItem.jsx

import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img 
        src={item.image} 
        alt={item.name} 
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button 
          className="quantity-btn"
          onClick={decrementQuantity}
        >
          -
        </button>
        <input 
          type="number"
          className="quantity-input"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button 
          className="quantity-btn"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
      <div className="cart-item-total">
        <p className="item-total-label">Total:</p>
        <p className="item-total-price">${itemTotal}</p>
      </div>
      <button 
        className="remove-btn"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;