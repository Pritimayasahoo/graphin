// src/App.jsx

import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">🛒 ShopEasy</h1>
          <p className="app-subtitle">Your one-stop shopping destination</p>
        </header>
        
        <div className="app-content">
          <main className="main-content">
            <ProductList />
          </main>
          
          <aside className="sidebar">
            <Cart />
          </aside>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;