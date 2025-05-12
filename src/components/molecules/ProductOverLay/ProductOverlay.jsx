import React from 'react';
import styles from './ProductOverlay.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShare, faPlus, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductOverlay = ({ product, onClose, onAddToCart, onAddToWishlist }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>{product.price}</p>
        <div className={styles.actions}>
          <button className={styles.addToCart} onClick={() => onAddToCart(product)}>
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>
          <button className={styles.share}>
            <FontAwesomeIcon icon={faShare} /> Share
          </button>
          <button className={styles.compare}>
            <FontAwesomeIcon icon={faPlus} /> Compare
          </button>
          <button className={styles.like} onClick={() => onAddToWishlist(product)}>
            <FontAwesomeIcon icon={faHeart} /> Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOverlay;