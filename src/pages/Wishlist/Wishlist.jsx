import React, { useContext } from 'react';
import Navbar from '../../components/organisms/Navbar/Navbar';
import styles from './Wishlist.module.scss';
import { WishlistContext } from '../../context/WishlistContext'; // Assuming you're using Context API
import { useNavigate, Link } from 'react-router-dom'; // Import Link and useNavigate

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  // const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    removeFromWishlist(itemId);
  };

  // const handleAddToCart = (product) => {
  //   addToCart(product);
  // };

  return (
    <div className={styles.wishlistPage}>
      <Navbar />
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className={styles.wishlistItemList}>
          {wishlist.map(item => (
            <li key={item.id} className={styles.wishlistItem}>
              <img src={item.image} alt={item.name} className={styles.wishlistItemImage} />
              <div className={styles.wishlistItemDetails}>
                <h3 className={styles.wishlistItemName}>{item.name}</h3>
                <p className={styles.wishlistItemPrice}>₹ {item.price && item.price.toLocaleString()}</p>
                <div className={styles.actions}>
                  <button className={styles.removeFromWishlistButton} onClick={() => handleRemoveItem(item.id)}>Remove</button>
                  <Link to={`/product/${item.id}`} className={styles.addToCartButton}>
                    Add to Cart
                  </Link>               
                 </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;