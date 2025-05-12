import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShare, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // const handleAddToCartClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation(); // Prevent card click navigation
  //   if (onAddToCart) {
  //     onAddToCart(product);
  //   }
  // };


  const handleAddToCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent card click navigation
    navigate(`/product/${product.id}`); // Navigate to product detail page
  };

  const handleAddToWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent card click navigation
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  const handleCardClick = () => {
    console.log('Product clicked:', product.name);
    // navigate(`/product/${product.id}`);
  };

  const getDiscountColor = (discount) => {
    if (discount >= 50) return '#e74c3c'; // Red for high discount
    if (discount >= 20) return '#f39c12'; // Orange for medium discount
    return '#3498db'; // Blue for low discount
  };

  console.log(`Product: ${product.name}, Discount:`, product.discount);

  return (
    <div
      className={styles.productCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {product.discountPercentage && (
        <div
          className={styles.discountBadge}
          style={{ backgroundColor: getDiscountColor(product.discountPercentage) }}
        >
          -{product.discountPercentage}%
        </div>
      )}
      {product.isNew && (
        <div className={styles.newBadge}>New</div>
      )}
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.priceContainer}>
          {product.originalPrice && (
            <span className={styles.originalPrice}> ₹{product.originalPrice.toLocaleString()}</span>
          )}
          <span className={styles.currentPrice}>₹ {product.price.toLocaleString()}</span>
        </div>
      </div>
      {isHovered && (
        <div className={styles.overlay}>
          <button className={styles.overlayButton} onClick={handleAddToCartClick}>
            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
          </button>
          <button className={styles.overlayButton}>
            <FontAwesomeIcon icon={faShare} /> Share
          </button>
          <button className={styles.overlayButton}>
            <FontAwesomeIcon icon={faEye} /> Compare
          </button>
          <button className={styles.overlayButton} onClick={handleAddToWishlistClick}>
            <FontAwesomeIcon icon={faHeart} /> Like
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;