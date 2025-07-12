import React from 'react';

// CartContext disabled for mock website

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ cartItems: [], addToCart: () => {}, removeFromCart: () => {}, clearCart: () => {} }}>
      {children}
    </CartContext.Provider>
  );
};
