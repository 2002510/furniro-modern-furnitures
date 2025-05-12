import React, { useContext, useEffect, useState } from 'react';
 import Navbar from '../../components/organisms/Navbar/Navbar';
 import styles from './Cart.module.scss';
 import { CartContext } from '../../context/CartContext';
 import { Link, useNavigate } from 'react-router-dom';
 import { toast, ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import TrashIcon from '../../assets/images/TrashIcon.png';
 import MasterCard from '../../assets/images/MasterCard.png';
 import Visa from '../../assets/images/Visa.png';
 import RuPay from '../../assets/images/RuPay.png';
 import Modal from '../../components/atoms/Modal/Modal'; // Import the Modal component

 const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, calculateSubtotal } = useContext(CartContext);
  const navigate = useNavigate();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDeleteKey, setItemToDeleteKey] = useState(null);
  const [itemToDeleteName, setItemToDeleteName] = useState(''); // State for product name
  const [isDeleting, setIsDeleting] = useState(false); // New state to track deletion

  useEffect(() => {
    if (isAddedToCart) {
      toast.success('Item added to cart!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      setIsAddedToCart(false);
    }
  }, [isAddedToCart]);

  const handleRemoveItem = (itemKey, itemName) => {
    console.log('handleRemoveItem CALLED with key:', itemKey, 'and name:', itemName);
    setItemToDeleteKey(itemKey);
    setItemToDeleteName(itemName); // Set the product name
    setIsDeleting(false); // Reset deleting state when modal opens
    setShowDeleteModal(true);
  };

  const handleQuantityChange = (itemKey, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.key === itemKey ? { ...item, quantity: parseInt(newQuantity, 10) } : item
      )
    );
  };

  // const [forceUpdate, setForceUpdate] = useState(null);

  const confirmDelete = () => {
    if (itemToDeleteKey && !isDeleting) {
      setIsDeleting(true);
      removeFromCart(itemToDeleteKey);
      setItemToDeleteKey(null);
      setItemToDeleteName('');
      toast.error('Item removed from cart!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      // We'll rely on the useEffect to close the modal
    }
  };

  const cancelDelete = () => {
    setItemToDeleteKey(null);
    setItemToDeleteName('');
    setShowDeleteModal(false);
    setIsDeleting(false);
  };


  useEffect(() => {
    if (isDeleting) {
      // Forcefully close the modal on the next render after isDeleting becomes true
      setShowDeleteModal(false);
      setIsDeleting(false); // Reset isDeleting after closing
    }
  }, [isDeleting]);

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? 40 : 0; // Example shipping cost
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (cart.length > 0) {
      // Store cart items (you might want to use localStorage or a context variable)
      const cartForCheckout = [...cart]; // Create a copy
  
      navigate('/checkout', { state: { cart: cartForCheckout } }); // Pass the cart data
  
      // Clear the cart *after* navigation (or after order confirmation on the checkout page)
      // cart.forEach(item => removeFromCart(item.key)); // Consider clearing after order confirmation
    } else {
      alert('Your cart is empty. Please add items to checkout.');
    }
  };

  if (cart.length === 0) {
    return (
      <div>
        <Navbar />
        <div className={styles.emptyCartPage}>
          <div className={styles.emptyCartContainer}>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/home" className={styles.continueShopping}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <Navbar />
      <div className={styles.shoppingContinue}>
        <Link to="/home">&lt; Continue Shopping</Link>
      </div>
      <div className={styles.shoppingCartHeader}>
        <h1>Shopping cart</h1>
        <p>You have {cart.length} item(s) in your cart</p>
      </div>
      <div className={styles.cartBillingContainer}>
        <ul className={styles.cartItemList}>
          {cart.map(item => (
            <li key={item.key} className={styles.cartItem}>
              <div className={styles.itemDetails}>
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />
                </Link>
                <div className={styles.itemInfo}>
                  <Link to={`/product/${item.id}`}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                  </Link>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <p className={styles.itemOptions}>
                    Size: {item.selectedSize || 'Default'} | Color: {item.selectedColor || 'Default'}
                  </p>
                </div>
              </div>
              <div className={styles.quantityControl}>
                <button onClick={() => updateQuantity(item.key, Math.max(1, item.quantity - 1))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.key, item.quantity + 1)}>+</button>
              </div>
              <span className={styles.itemPrice}>
                ₹ {(Number(item.price) * Number(item.quantity) || 0).toLocaleString('en-IN')}
              </span>
              <button className={styles.removeItemButton} onClick={() => {console.log('Delete button CLICKED for:', item.key, item.name);
              handleRemoveItem(item.key, item.name)}}>
                <img src={TrashIcon} alt="Remove" />
              </button>
            </li>
          ))}
        </ul>

        {/* Billing Page Section - Exactly like the image */}
        <div className={styles.billingDetails}>
          <div className={styles.cardDetailsHeader}>
            <h2>Card Details</h2>
          </div>
          <div className={styles.cardTypeSection}>
            <label>Card type</label>
            <div className={styles.cardLogos}>
              <img src={MasterCard} alt="Mastercard" /> {/* Replace with your logo */}
              <img src={Visa} alt="Visa" /> {/* Replace with your logo */}
              <img src={RuPay} alt="RuPay" /> {/* Replace with your logo */}
              <Link to="#">See all</Link>
            </div>
          </div>
          <div className={styles.paymentInfo}>
            <label>Name on card</label>
            <input type="text" placeholder="Name" />
            <label>Card Number</label>
            <input type="text" placeholder="1111 2222 3333 4444" />
            <div className={styles.expiryCvv}>
              <div>
                <label>Expiration date</label>
                <input type="text" placeholder="mm/yy" />
              </div>
              <div>
                <label>CVV</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
          </div>
          <div className={styles.orderSummarySection}>
            <h3>Order Summary</h3>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>₹ {subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Shipping</span>
              <span>₹ {shipping.toLocaleString('en-IN')}</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total (Tax Incl.)</span>
              <span>₹ {total.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <div className={styles.checkoutButtonContainer}>
            <span>₹ {total.toLocaleString('en-IN')}</span>
            <button onClick={handleCheckout}>Checkout →</button>
          </div>
        </div>
      </div>
      <ToastContainer />

 {/* Delete Confirmation Modal */}
 {showDeleteModal && (
        <Modal onClose={cancelDelete}>
          <p>Are you sure you want to delete <b>"{itemToDeleteName}"</b>?</p>
          <div className={styles.modalButtons}>
            <button onClick={confirmDelete} className={styles.confirmButton} disabled={isDeleting}>
              {isDeleting ? 'Deleting...' : 'Yes'}
            </button>
            <button onClick={cancelDelete} className={styles.cancelButton} disabled={isDeleting}>
              No
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
 };

 export default CartPage;