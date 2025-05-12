import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles/global.scss';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

const App = () => {
  return (
    <Router>
      <CartProvider> {/* Wrap AppRoutes with CartProvider */}
        <WishlistProvider> {/* Wrap AppRoutes with WishlistProvider */}
          <AppRoutes />
          <ToastContainer />
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
};

export default App;