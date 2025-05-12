import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import FurniroLogo from '../../../assets/images/furniro-logo.png';
import UserIcon from '../../../assets/images/user-icon.svg';
import SearchIcon from '../../../assets/images/search-icon.svg';
import HeartIcon from '../../../assets/images/heart-icon.svg';
import CartIcon from '../../../assets/images/cart-icon.svg';

const Navbar = () => {
  const navLinks = [
    { to: '/home', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    {  label: 'About' },
    {  label: 'Contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={FurniroLogo} alt="Furniro" />
        {/* <span>Furniro</span> */}
      </Link>
      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.navIcons}>
        <Link >
          <img src={UserIcon} alt="Account" />
        </Link>
        <Link >
          <img src={SearchIcon} alt="Search" />
        </Link>
        <Link to="/wishlist">  {/* Add Wishlist Link */}
          <img src={HeartIcon} alt="Wishlist" />
        </Link>
        <Link to="/cart">    {/* Add Cart Link */}
          <img src={CartIcon} alt="Cart" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;