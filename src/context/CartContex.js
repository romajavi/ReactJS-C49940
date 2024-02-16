import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };

  const precioTotal = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    precioTotal,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export { CartContext };