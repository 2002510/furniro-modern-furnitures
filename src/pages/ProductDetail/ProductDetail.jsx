import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/organisms/Navbar/Navbar';
import Footer from '../../components/organisms/Footer/Footer';
import styles from './ProductDetail.module.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { productList } from '../../data/productList'; // For small datasets
import { CartContext } from '../../context/CartContext'; // Import your CartContext
import facebookIcon from '../../assets/images/FaceBook.png';
import linkedinIcon from '../../assets/images/LinkedIn.png';   
import twitterIcon from '../../assets/images/Twitter.png';    
import Modal from '../../components/atoms/Modal/Modal';
import ProductCard from '../../components/molecules/ProductCard/ProductCard'; // Import ProductCard


const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); 
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showSizeModal, setShowSizeModal] = useState(false); // State for size modal
  const [showColorModal, setShowColorModal] = useState(false); // State for color modal
  const { addToCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState('description'); // State for the active tab
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [idBasedRelatedProducts, setIdBasedRelatedProducts] = useState([]);
  const [visibleIdBasedProducts, setVisibleIdBasedProducts] = useState(4);


  useEffect(() => {
    const foundProduct = productList.find(p => p.id === parseInt(id));
    if (foundProduct) {
      console.log('Product ID from productList:', foundProduct.id, typeof foundProduct.id); // ADD THIS LINE
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image); // Assuming the first image is the main one
      // Fetch related products (you might want to refine this logic)
      const categoryRelated = productList.filter(
        (p) => p.category === foundProduct.category && p.id !== foundProduct.id
      );
      // Take a limited number of related products (e.g., 2)
      // const slicedRelated = categoryRelated.slice(0, 2);
      // setRelatedProducts(slicedRelated);
      // console.log('Related Products:', slicedRelated); 
      setRelatedProducts(categoryRelated);
    } else {
      console.log('Product not found');
    }
  }, [id, navigate,location.pathname]);


 // useEffect for fetching ID-based related products (for "Related Products" below)
  useEffect(() => {
    const foundProduct = productList.find(p => p.id === parseInt(id));
    if (foundProduct) {
      // ... (rest of the code) ...
      const initialIdBasedProducts = productList.filter(
        p => p.id >= 1 && p.id <= 10 && p.id !== parseInt(id)
      );
      setIdBasedRelatedProducts(initialIdBasedProducts); 
      console.log('ID-Based Related Products (IDs 1-4):', initialIdBasedProducts);
    } else {
      console.log('Product not found');
    }
  }, [id]);


  if (!product) {
    return <div>Loading product details...</div>; // Or a loading spinner
  }

  const handleAddToCart = () => {
    let canAddToCart = true;

    if (product.sizes && !selectedSize) {
      setShowSizeModal(true);
      canAddToCart = false;
    }

    if (product.colors && !selectedColor) {
      setShowColorModal(true);
      canAddToCart = false;
    }

    if (canAddToCart && product) {
      console.log('Adding to cart with:', {
        productId: product.id,
        quantity: quantity,
        selectedSize: selectedSize,
        selectedColor: selectedColor,
      });
      addToCart(product.id, quantity, selectedSize, selectedColor);
      navigate('/cart');
    }
  };

  const handleCompare = () => {
    // Implement your compare logic here
    console.log('Compare:', product);
  };

  const handleQuantityIncrement = () => {
    console.log('Increment button clicked. Previous Quantity:', quantity); // Log current quantity
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleQuantityDecrement = () => {
    console.log('Decrement button clicked. Previous Quantity:', quantity); // Log current quantity
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleShowMore = () => {
    setVisibleIdBasedProducts(prev => prev + 4); // Load 4 more products
  };

const visibleIdBased = idBasedRelatedProducts.slice(0, visibleIdBasedProducts);
  // Assuming product has properties like images, sizes, colors, etc.
  const thumbnailImages = product.images || [product.image]; // Example

  return (
    <div className={styles.productDetailPage}>
      <Navbar />
      <div className={styles.breadcrumb}>
  {/* Example breadcrumb */}
  Home &gt; Shop
  {product && (
    <>
      &gt; {product.category} &gt; {product.name}
    </>
  )}
</div>
      <div className={styles.productDetailsContainer}>
        <div className={styles.imageGallery}>
          <img src={selectedImage} alt={product.name} className={styles.mainImage} />
          <div className={styles.thumbnails}>
            {thumbnailImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={styles.thumbnail}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          <div className={styles.rating}>
            {/* Render star rating */}
            ★★★★★ ({product.reviewsCount || 0} Customer Reviews)
          </div>
          <div className={styles.price}>₹ {product.price.toLocaleString()}</div>
          <div className={styles.description}>{product.description}</div>

          {product.sizes && (
            <div className={styles.options}>
              <p>Size:</p>
              <div className={styles.sizeOptions}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={selectedSize === size ? styles.selected : ''}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && (
            <div className={styles.options}>
              <p>Color:</p>
              <div className={styles.colorOptions}>
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`${styles.colorSwatch} ${selectedColor === color ? styles.selected : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                  ></button>
                ))}
              </div>
            </div>
          )}

          <div className={styles.quantity}>
            <label htmlFor="quantity">Quantity:</label>
            <div className={styles.quantityControls}>
              <button onClick={handleQuantityDecrement}>-</button>
              <input type="number" id="quantity" value={quantity} readOnly />
              <button onClick={handleQuantityIncrement}>+</button>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.addToCartButton} onClick={handleAddToCart}>Add To Cart</button>
            <button className={styles.compareButton} onClick={handleCompare}>Compare</button>
          </div>

          <div className={styles.meta}>
            <p>SKU: {product.sku}</p>
            <p>Category: {product.category}</p>
            <p>Tags: {product.tags && product.tags.join(', ')}</p>
            <div className={styles.share}>
            Share:
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className={styles.shareIconLink}>
              <img src={facebookIcon} alt="Share on Facebook" className={styles.shareIcon} />
            </a>
            <a href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${product.name}`} target="_blank" rel="noopener noreferrer" className={styles.shareIconLink}>
              <img src={linkedinIcon} alt="Share on LinkedIn" className={styles.shareIcon} />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${product.name}`} target="_blank" rel="noopener noreferrer" className={styles.shareIconLink}>
              <img src={twitterIcon} alt="Share on Twitter" className={styles.shareIcon} />
            </a>
          </div>
          </div>
        </div>
      </div>


      <div className={styles.productOverviewSection}>
        <div className={styles.overviewTabs}>
          <button
            className={activeTab === 'description' ? styles.active : ''}
            onClick={() => handleTabClick('description')}
          >
            Description
          </button>
          <button
            className={activeTab === 'additionalInformation' ? styles.active : ''}
            onClick={() => handleTabClick('additionalInformation')}
          >
            Additional Information
          </button>
          <button
            className={activeTab === 'reviews' ? styles.active : ''}
            onClick={() => handleTabClick('reviews')}
          >
            Reviews [{product.reviews ? product.reviews.length : 0}]
          </button>
        </div>

        <div className={styles.overviewContent}>
          {activeTab === 'description' && (
            <div className={styles.descriptionContent}>
              {product.longDescription || product.description || 'No detailed description available.'}
            </div>
          )}

          {activeTab === 'additionalInformation' && (
            <div className={styles.additionalInformationContent}>
              {product.additionalInformation ? (
                Object.entries(product.additionalInformation).map(([key, value]) => (
                  <div key={key} className={styles.infoRow}>
                    <h3>{key}</h3>
                    {Array.isArray(value) ? (
                      <ul>
                        {value.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{value}</p>
                    )}
                  </div>
                ))
              ) : (
                'No additional information available.'
              )}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className={styles.reviewsContent}>
              <h3>Customer Reviews</h3>
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className={styles.review}>
                    <p className={styles.reviewer}>{review.author}</p>
                    <div className={styles.rating}>
                      {Array.from({ length: review.rating }).map((_, i) => '★')}
                      {Array.from({ length: 5 - review.rating }).map((_, i) => '☆')}
                    </div>
                    <p className={styles.comment}>{review.comment}</p>
                  </div>
                ))
              ) : (
                'No reviews yet.'
              )}
            </div>
          )}
        </div>
      </div>

      <div className={styles.relatedProductsSection}>
  <h2>You May Also Like</h2>
  <div className={styles.relatedProductsImages}>
    {relatedProducts.slice(0, 2).map((relatedProduct)  => (
      <div key={relatedProduct.id} className={styles.relatedProductItem}>
        {/* <h3>{relatedProduct.name}</h3> Optionally display the name */}
        <div className={styles.relatedProductThumbnails}>
          {relatedProduct.images && relatedProduct.images.slice(0, 2).map((thumbnail, index) => (
            <img
              key={`${relatedProduct.id}-thumb-${index}`}
              src={thumbnail}
              alt={`${relatedProduct.name} - Thumbnail ${index + 1}`}
              className={styles.relatedProductThumbnail}
            />
          ))}
        </div>
      </div>
    ))}
     </div>
     </div>

     {/* ... Product related Section ... */}

      <div className={styles.relatedProductsSectionBelowOverview}>
        <h2>Related Products</h2>
        <div className={styles.relatedProductsGridBelowOverview}>
          {visibleIdBased.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
        {idBasedRelatedProducts.length > 4 && visibleIdBased.length < idBasedRelatedProducts.length && (          
          <div className={styles.showMoreButtonContainerBelowOverview}>
            <button className={styles.showMoreButtonBelowOverview} onClick={handleShowMore}>
              Show More
            </button>
          </div>
        )}
      </div>

      <Footer />

{/* Size Modal */}
{showSizeModal && (
        <Modal onClose={() => setShowSizeModal(false)}>
          <p>Please select a size.</p>
          <button onClick={() => setShowSizeModal(false)}>OK</button>
        </Modal>
      )}

      {/* Color Modal */}
      {showColorModal && (
        <Modal onClose={() => setShowColorModal(false)}>
          <p>Please select a color.</p>
          <button onClick={() => setShowColorModal(false)}>OK</button>
        </Modal>
      )}
    </div>
  );
 };


export default ProductDetailPage;