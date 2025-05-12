// src/context/WishlistContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { CartContext } from './CartContext'; // Import CartContext to use addToCart

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart: addToCartContext } = useContext(CartContext); // Rename to avoid conflict

  const addToWishlist = (product) => {
    setWishlist(prevWishlist => {
      // Check if the product is already in the wishlist
      if (prevWishlist.some(item => item.id === product.id)) {
        return prevWishlist; // Don't add if it exists
      }
      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== itemId));
  };

  const addToCartFromWishlist = (product) => {
    addToCartContext(product.id); // Use the addToCart function from CartContext
    removeFromWishlist(product.id); // Optionally remove from wishlist after adding to cart
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, addToCart: addToCartFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;