// routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import Wishlist from '../pages/Wishlist/Wishlist';
import ProductDetail from '../pages/ProductDetail/ProductDetail'; // Make sure this import exists
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import ShopPage from '../pages/Shop/ShopPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} /> {/* Default or initial route */}
    <Route path="/home" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/product/:id" element={<ProductDetail />} /> 
    <Route path="/checkout" element={<CheckoutPage />} />
     <Route path="/shop" element={<ShopPage />} />
  </Routes>
);

export default AppRoutes;