import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss'; // Correct relative path

const Footer = () => {
  return (
    <div className={styles.footer}> {/* Use styles.footer */}
      <div className={styles.footer_box}> {/* Use styles.footer_box */}
        <div className={styles.box2}> {/* Use styles.box2 */}

          <ul className={styles.furniro_about}> {/* Use styles.furniro_about */}
            <li className={styles.furniro_about_1}>Furniro.</li> {/* Use styles.furniro_about_1 */}
            <li className={styles.furniro_about_2}>400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA</li> {/* Use styles.furniro_about_2 */}
          </ul>

          <ul className={styles.links}> {/* Use styles.links */}
            <li className={styles.links_1}>Links</li> {/* Use styles.links_1 */}
            <li className={styles.links_2}> {/* Use styles.links_2 */}
              <NavLink className={styles.Links_1} to="/">Home</NavLink> {/* Use styles.Links_1 */}
            </li>
            <li className={styles.links_2}> {/* Use styles.links_2 */}
              <NavLink className={styles.Links_1} to="/shop">Shop</NavLink> {/* Use styles.Links_1 */}
            </li>
            <li className={styles.links_2}> {/* Use styles.links_2 */}
              <NavLink className={styles.Links_1} to="/about">About</NavLink> {/* Use styles.Links_1 */}
            </li>
            <li className={styles.links_2}> {/* Use styles.links_2 */}
              <NavLink className={styles.Links_1} to="/contact">Contact</NavLink> {/* Use styles.Links_1 */}
            </li>
          </ul>

          <ul className={styles.help}> {/* Use styles.help */}
            <li className={styles.links_1}>Help</li> {/* Use styles.links_1 */}
            <li className={styles.help_1}>Payment Options</li> {/* Use styles.help_1 */}
            <li className={styles.help_1}>Returns</li> {/* Use styles.help_1 */}
            <li className={styles.help_1}>Privacy Policies</li> {/* Use styles.help_1 */}
          </ul>

          <ul className={styles.subscribe}> {/* Use styles.subscribe */}
            <li className={styles.links_1}>Newsletter</li> {/* Use styles.links_1 */}
            <li className={styles.emails}> {/* Use styles.emails */}
              <input type="email" placeholder='Enter Your Email Address' />
              <button className={styles.subsc}>SUBSCRIBE</button> {/* Use styles.subsc */}
            </li>
          </ul>
        </div>
        <p className={styles.line}></p> {/* Use styles.line */}
        <p className={styles.subtitle}>2023 furino. All rights reverved  |  Made by <h1 className={styles.title_11}>SHOHNAZAR</h1> </p> {/* Use styles.subtitle and styles.title_11 */}
      </div>
    </div>
  );
};

export default Footer;