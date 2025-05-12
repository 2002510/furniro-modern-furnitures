import React, { useState, useContext, useRef, useEffect } from 'react';
// import React, { useState, useContext } from 'react';
import styles from './Home.module.scss';
import Navbar from '../../components/organisms/Navbar/Navbar';
import Footer from '../../components/organisms/Footer/Footer';
import ProductCard from '../../components/molecules/ProductCard/ProductCard';
import { productList as allProducts } from '../../data/productList'; // Renamed import for clarity
import { inspirationRooms } from '../../data/inspirationData'; // Import inspiration data
import { useNavigate,  Link } from 'react-router-dom';
import ProductOverlay from '../../components/molecules/ProductOverlay/ProductOverlay';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import bannerImage from '../../assets/images/BannerImage.png';
import Dining from '../../assets/images/Dining.png';
import Living from '../../assets/images/Living.png';
import Bedroom from '../../assets/images/Bedroom.png';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and container
import { setupImages } from '../../data/setupImages';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(8); // State for "Show More" functionality
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const inspirationSliderRef = useRef(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const numberOfRooms = inspirationRooms.length;


  const handleAddToCart = (product) => {
    addToCart(product.id); // Pass the product ID to the context
    toast.success(`${product.name} added to cart!`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product); // Pass the product ID to the context
    toast.success(`${product.name} added to wishlist!`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // If you want to navigate to the product detail page on click of the card:
    // navigate(`/product/${product.id}`);
  };

  const handleCloseOverlay = () => {
    setSelectedProduct(null);
  };

  const handleShowMore = () => {
    setVisibleProducts(prev => prev + 8);
  };

  const displayedProducts = allProducts.slice(0, visibleProducts);
  const showMoreButtonVisible = displayedProducts.length < allProducts.length;


// Slider dot scrolling position

  useEffect(() => {
        const slider = inspirationSliderRef.current;
    
        const handleScroll = () => {
          if (slider) {
            const scrollLeft = slider.scrollLeft;
            const itemWidth = slider.offsetWidth; // Approximate width of each item
            const currentIndex = Math.round(scrollLeft / itemWidth);
    
            // Ensure the index is within bounds
            if (currentIndex >= 0 && currentIndex < numberOfRooms) {
              setActiveDotIndex(currentIndex);
            }
          }
        };
    
        if (slider) {
          slider.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (slider) {
            slider.removeEventListener('scroll', handleScroll);
          }
        };
      }, [numberOfRooms]);
    
      const scrollToRoom = (index) => {
        if (inspirationSliderRef.current) {
          const itemWidth = inspirationSliderRef.current.offsetWidth;
          inspirationSliderRef.current.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth',
          });
        }
      };


  return (
    <div className={styles.homePage}>
      <Navbar />

      {/* New Arrival Banner Section */}
      <div className={styles.newArrivalBanner}>
        <div className={styles.bannerImageContainer}>
          <img src={bannerImage} alt="New Arrival Banner" className={styles.bannerImage} />
        </div>
        <div className={styles.bannerContent}>
          <p className={styles.newArrivalText}>New Arrival</p>
          <h2 className={styles.bannerTitle}>Discover Our <br /> New Collection</h2>
          <p className={styles.bannerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className={styles.buyNowButton}>BUY NOW</button>
        </div>
      </div>

      {/* Browse The Range Section */}
      <div className={styles.browseRangeSection}>
        <h2 className={styles.browseTitle}>Browse The Range</h2>
        <p className={styles.browseDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className={styles.categoryImages}>
          <div className={styles.categoryItem}>
            <img src={Dining} alt="Dining" />
            <h3>Dining</h3>
          </div>
          <div className={styles.categoryItem}>
            <img src={Living} alt="Living" />
            <h3>Living</h3>
          </div>
          <div className={styles.categoryItem}>
            <img src={Bedroom} alt="Bedroom" />
            <h3>Bedroom</h3>
          </div>
        </div>
      </div>


      {/* Our Products Section */}
      <div className={styles.productSection}>
        <h1 className={styles.sectionTitle}>Our Products</h1>
        <div className={styles.productList}>
          {displayedProducts.map((product,index) => (
            <ProductCard
              key={product.id}
              product={product}
              // onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              forceUpdate={Date.now()}
            />
          ))}
        </div>
        {/* <p>Displayed Products Length: {displayedProducts.length}</p>
        <p>All Products Length: {allProducts.length}</p>
        <p>Show More Button Visible: {showMoreButtonVisible.toString()}</p> */}
        {showMoreButtonVisible && (
          <button className={styles.showMoreButton} onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>


      {/* Beautiful Rooms Inspiration Section */}
      <div className={styles.inspirationSection}>
  <div className={styles.inspirationLeft}>
    <h2 className={styles.inspirationTitle}>50+ Beautiful rooms inspiration</h2>
    <p className={styles.inspirationDescription}>Our designers already made a lot of beautiful prototype of rooms that inspire you.</p>
    <button className={styles.exploreMoreMainButton}>Explore More</button>
  </div>
  <div className={styles.inspirationSliderContainer}>
    <div className={styles.inspirationSlider} ref={inspirationSliderRef}>
      {inspirationRooms.map(room => (
        <div key={room.id} className={styles.inspirationItem}>
          <div className={styles.inspirationImageContainer}>
          <div className={styles.roomCategory}>{room.category}</div>
            {/* {room.topText && <div className={styles.roomTopText}>{room.topText}</div>} Conditionally render top text */}
            <img src={room.imageUrl} alt={room.title} />
            <div className={styles.roomNameOverlay}>
              <h3 className={styles.roomName}>{room.title}</h3>
              <button className={styles.viewRoomButton}>{room.buttonText}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.sliderNavigation}>
      {inspirationRooms.map((_, index) => (
        <button
          key={index}
          className={`${styles.navigationDot} ${index === activeDotIndex ? styles.active : ''}`}
          onClick={() => scrollToRoom(index)}
        ></button>
      ))}
    </div>
  </div>
      </div>


     {/* Share Your Setup Section */}
     <div className={styles.shareSetupSection}>
  <h2 className={styles.shareSetupDesc}>Share your setup with <br/><span className={styles.shareSetupTitle}>#FuniroFurniture</span></h2>
  <div className={styles.shareSetupGrid}>
    {setupImages.map((imageUrl, index) => (
      <div key={index} className={styles.gridItem}>
        <img src={imageUrl} alt={`Setup ${index + 1}`} />
      </div>
    ))}
  </div>
     </div>


      <Footer />
      <ToastContainer /> {/* Add the ToastContainer for notifications */}

      {selectedProduct && (
        <ProductOverlay
          product={selectedProduct}
          onClose={handleCloseOverlay}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      )}
    </div>
  );
};

export default Home;