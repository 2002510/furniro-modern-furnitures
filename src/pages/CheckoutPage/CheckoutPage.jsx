import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckoutPage.module.scss';
import { CartContext } from '../../context/CartContext';

const CheckoutPage = () => {
  const { cart, calculateSubtotal, clearCart } = useContext(CartContext); // Use a clearCart function
  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? 40 : 0;
  const total = subtotal + shipping;
  const hasClearedCart = useRef(false);

  // Clear the cart only once when the component mounts
  // useEffect(() => {
  //   if (!hasClearedCart.current) {
  //     clearCart();
  //     hasClearedCart.current = true;
  //   }
  // }, [clearCart]);

  if (cart.length === 0 && hasClearedCart.current) {
    return (
      <div className={styles.checkoutContainer}>
        <h2>Your cart is empty.</h2>
        <p>Thank you for your order!</p>
        <Link to="/home" className={styles.backToHome}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.thankYou}>Thank You For Your Order! 🛒</h1>
      <div className={styles.billContainer}>
        <h2>Order Summary</h2>
        <ul className={styles.billItems}>
          {cart.map(item => (
            <li key={item.key} className={styles.billItem}>
              <span className={styles.itemName}>{item.name} ({item.selectedSize}, {item.selectedColor})</span>
              <span className={styles.itemQuantity}>x {item.quantity}</span>
              <span className={styles.itemPrice}>₹ {(Number(item.price) * item.quantity).toLocaleString('en-IN')}</span>
            </li>
          ))}
        </ul>
        <div className={styles.billTotal}>
          <span className={styles.totalLabel}>Subtotal:</span>
          <span className={styles.totalAmount}>₹ {subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div className={styles.billTotal}>
          <span className={styles.totalLabel}>Shipping:</span>
          <span className={styles.totalAmount}>₹ {shipping.toLocaleString('en-IN')}</span>
        </div>
        <div className={styles.billGrandTotal}>
          <span className={styles.grandTotalLabel}>Total:</span>
          <span className={styles.grandTotalAmount}>₹ {total.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <p className={styles.message}>Your order has been placed and will be processed shortly.</p>
      <p className={styles.comeBack}>We appreciate your business. Come back and shop with us again!</p>
      <Link to="/home" className={styles.backToHome}>Continue Shopping</Link>
    </div>
  );
};

export default CheckoutPage;