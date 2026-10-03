import React, { createContext, useContext, useState } from 'react';

// 1. Context Create Karo
const CartContext = createContext();

// 2. Custom Provider Component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Item add karne ka logic
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Item remove karne ka logic
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Custom Hook (Har component me useContext import nahi karna padega)
export function useCart() {
  return useContext(CartContext);
}