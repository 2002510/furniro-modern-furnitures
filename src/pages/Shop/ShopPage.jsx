import React, { useState, useEffect } from 'react';
import Navbar from '../../components/organisms/Navbar/Navbar';
import Footer from '../../components/organisms/Footer/Footer';
import styles from './ShopPage.module.scss';
import { productList } from '../../data/productList';
import ProductCard from '../../components/molecules/ProductCard/ProductCard';
import { FaFilter, FaListUl, FaTh } from 'react-icons/fa';
import bannerImage from '../../assets/images/shop-banner.jpg';

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);
    const [gridView, setGridView] = useState(true);

    const getProductsPerPage = (page) => {
        if (page <= 5) {
            return 15;
        } else if (page === 6) {
            return 10;
        } else {
            return 15;
        }
    };

    useEffect(() => {
        // Assuming productList is an array of 16 items that you want to loop to 80
        const expandedProductList = [];
        for (let i = 0; i < 5; i++) {
            expandedProductList.push(...productList.map(product => ({ ...product, id: `${product.id}-${i}` })));
        }
        setProducts(expandedProductList);
    }, []);

    const sortProducts = (productsToSort, sortOption) => {
        let sortedProducts = [...productsToSort];
        switch (sortOption) {
            case 'price-low-to-high':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-to-low':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        return sortedProducts;
    };

    const sortedProducts = sortProducts(products, sortBy);

    const calculateTotalPages = () => {
        let total = sortedProducts.length;
        let pages = 0;
        let pageNum = 1;
        while (total > 0) {
            total -= getProductsPerPage(pageNum);
            pages++;
            pageNum++;
        }
        return pages;
    };
    const totalPages = calculateTotalPages();

    const paginate = (pageNumber) => {
        console.log('Paginate clicked:', pageNumber);
        setCurrentPage(pageNumber);
    };

    const goToNextPage = () => {
        console.log('Next page clicked. Current:', currentPage, 'Total:', totalPages);
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    const goToPreviousPage = () => {
        console.log('Previous page clicked. Current:', currentPage);
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        setCurrentPage(1);
    };

    const toggleGridView = () => setGridView(true);
    const toggleListView = () => setGridView(false);

    const productsPerPage = getProductsPerPage(currentPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);

    return (
        <div className={styles.shopPage}>
            <Navbar />
            {console.log('Current Page in Render:', currentPage)}
            <div className={styles.shopHeader}>
                <div className={styles.bannerImageContainer}>
                    <img src={bannerImage} alt="Shop Banner" className={styles.bannerImage} />
                    <div className={styles.overlayText}>
                        <h1 className={styles.shopTitle}>Shop</h1>
                        <div className={styles.breadcrumb}><b>Home</b> &gt; Shop</div>
                    </div>
                </div>
            </div>

            <div className={styles.shopContent}>
                <div className={styles.filterSection}>
                    <div className={styles.filterControls}>
                        <button className={styles.filterButton}>
                            <FaFilter className={styles.filterIcon} />
                            Filter
                        </button>
                        <FaTh className={styles.gridIcon} onClick={toggleGridView} className={gridView ? styles.activeIcon : ''} />
                        <FaListUl className={styles.listIcon} onClick={toggleListView} className={!gridView ? styles.activeIcon : ''} />
                        <span className={styles.resultsCount}>
                            Showing {startIndex + 1}-{Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} results
                        </span>
                    </div>
                    <div className={styles.sortControls}>
                        <span>Show</span>
                        <select className={styles.showSelect} disabled>
                            <option value={15}>Dynamic</option>
                        </select>
                        <span>Sort by</span>
                        <select className={styles.sortBySelect} value={sortBy} onChange={handleSortChange}>
                            <option value="default">Default</option>
                            <option value="price-low-to-high">Price: Low to High</option>
                            <option value="price-high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className={`${styles.productList} ${!gridView ? styles.listView : ''}`}>
                    {currentProducts.map(product => (
                        <ProductCard key={product.id} product={product} isListView={!gridView} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            const pageNumber = Math.max(1, Math.min(currentPage - 2, totalPages - 4)) + i;
                            return pageNumber <= totalPages && (
                                <button
                                    key={pageNumber}
                                    onClick={() => paginate(pageNumber)}
                                    className={pageNumber === currentPage ? styles.active : ''}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                        {totalPages > 5 && currentPage < totalPages - 2 && <span className={styles.dots}>...</span>}
                        {totalPages > 1 && currentPage < totalPages && (
                            <button onClick={goToNextPage}>Next</button>
                        )}
                    </div>
                )}

                <div className={styles.belowPagination}>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>🏆</div>
                        <h3>High Quality</h3>
                        <p>crafted from top materials</p>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>🛡️</div>
                        <h3>Warranty Protection</h3>
                        <p>Over 2 years</p>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>🚚</div>
                        <h3>Free Shipping</h3>
                        <p>Order over 150 $</p>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>🎧</div>
                        <h3>24 / 7 Support</h3>
                        <p>Dedicated support</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShopPage;