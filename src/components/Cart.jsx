// src/components/Cart.jsx

import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, getTotalPrice, getTotalItems } = useCart();

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart</h2>
        <span className="cart-item-count">
          {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
        </span>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p className="empty-cart-message">Add some products to get started!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-row">
              <span className="summary-label">Subtotal:</span>
              <span className="summary-value">${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span className="summary-label">Total:</span>
              <span className="summary-value total-value">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;