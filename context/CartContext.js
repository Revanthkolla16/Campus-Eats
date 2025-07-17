"use client"
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const found = prev.find((i) => i.name === item.name);
      if (found) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => {
      const found = prev.find((i) => i.name === name);
      if (!found) return prev;
      if (found.qty === 1) {
        return prev.filter((i) => i.name !== name);
      }
      return prev.map((i) =>
        i.name === name ? { ...i, qty: i.qty - 1 } : i
      );
    });
  };

  const setItemQty = (item, qty) => {
    setCartItems((prev) => {
      if (qty <= 0) return prev.filter((i) => i.name !== item.name);
      const found = prev.find((i) => i.name === item.name);
      if (found) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty } : i
        );
      }
      return [...prev, { ...item, qty }];
    });
  };

  const getItemQty = (name) => {
    const found = cartItems.find((i) => i.name === name);
    return found ? found.qty : 0;
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, setItemQty, getItemQty }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
} 