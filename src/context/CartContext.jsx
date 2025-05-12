// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';
import { productList } from '../data/productList'; // Import your product data

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDeleteKey, setItemToDeleteKey] = useState(null);
  const [itemToDeleteName, setItemToDeleteName] = useState('');

  const clearCart = () => {
    setCart([]);
  };

  const generateCartItemKey = (productId, selectedSize, selectedColor) => {
    return `${productId}-${selectedSize}-${selectedColor}`;
  };

  const addToCart = (productId, quantity, selectedSize, selectedColor) => {
  console.log('addToCart called with:', { productId, quantity, selectedSize, selectedColor });
  const productToAdd = productList.find(product => product.id === productId);
  if (productToAdd) {
    const cartItemKey = generateCartItemKey(productId, selectedSize, selectedColor);
    console.log('Generated Cart Item Key:', cartItemKey);
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.key === cartItemKey);

      console.log('Existing item index:', existingItemIndex);
      console.log('Previous cart:', prevCart);

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };
        console.log('Updated cart:', updatedCart);
        return updatedCart;
      } else {
        const newItem = {
          ...productToAdd,
          id: Number(productToAdd.id), // Ensure ID is a number
          quantity,
          selectedSize: selectedSize === undefined ? null : selectedSize,
          selectedColor: selectedColor === undefined ? null : selectedColor,
          key: cartItemKey, // Add the unique key
          price: productToAdd.price,
        };
        console.log('Adding new item:', newItem);
        return [...prevCart, newItem];
      }
    });
  } else {
    console.log('Product with ID:', productId, 'not found in productList');
  }
  };

  const removeFromCart = (cartItemKey) => {
    setCart(prevCart => prevCart.filter(item => item.key !== cartItemKey));
  };
  
  const updateQuantity = (cartItemKey, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.key === cartItemKey ? { ...item, quantity: Math.max(1, parseInt(quantity, 10) || 1) } : item
      )
    );
  };

  const calculateSubtotal = () => {
    console.log('Calculating Subtotal. Current cart:', JSON.stringify(cart, null, 2)); // Log the cart in detail
    return cart.reduce((total, item) => {
      console.log('Processing Item:', JSON.stringify(item));
      console.log('Item Price Type:', typeof item.price, 'Value:', item.price);
      console.log('Item Quantity Type:', typeof item.quantity, 'Value:', item.quantity);

      const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
      const quantity = typeof item.quantity === 'string' ? parseInt(item.quantity, 10) : item.quantity;

      console.log('Parsed Price:', price, 'Parsed Quantity:', quantity);

      if (typeof price === 'number' && !isNaN(price) && typeof quantity === 'number' && !isNaN(quantity)) {
        return total + price * quantity;
      } else {
        console.error('Invalid price or quantity found in cart item:', item);
        return total; // Skip this item in the calculation
      }
    }, 0);
  };

  const handleRemoveItem = (itemKey, itemName) => {
    setItemToDeleteKey(itemKey);
    setItemToDeleteName(itemName);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (itemToDeleteKey) {
      const keyToRemove = itemToDeleteKey;
      const newCart = cart.filter(item => item.key !== keyToRemove);
      setCart(newCart);
      setItemToDeleteKey(null);
      setItemToDeleteName('');
      setTimeout(() => {
        setShowDeleteModal(false);
      }, 0); // Execute after the current event loop
      // You might want to trigger a toast notification here if needed
    }
  };

  const cancelDelete = () => {
    setItemToDeleteKey(null);
    setItemToDeleteName('');
    setShowDeleteModal(false);
  };

return (
  <CartContext.Provider value={{
    cart, addToCart, removeFromCart, updateQuantity, calculateSubtotal,
    showDeleteModal, itemToDeleteKey, itemToDeleteName, clearCart,
    handleRemoveItem, confirmDelete, cancelDelete
  }}>
    {children}
  </CartContext.Provider>
);
};


export default CartProvider;