import Link from 'next/link';
import React from 'react';
import styles from '../styles/navbar.module.css';
import '../../public/portfolioLogo.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';

function Navbar() {
  {
    /* Active link in navbar */
  }
  const [activeNav, setActiveNav] = useState('/');

  {
    /* Navbar BG change at scroll */
  }
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      window.scrollY >= 100 ? setColorChange(true) : setColorChange(false);
    };

    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  {
    /* Mobile Toggle Menu */
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        colorChange ? styles.navbarContainerBg : styles.navbarContainer
      }
    >
      <div className={styles.navContentWrapper}>
        <Link className={styles.navLogoLink} href="/">
          <img
            className={styles.navbarLogoImg}
            src="portfolioLogo.svg"
            alt="Portfolio Logo"
          />
        </Link>

        <ul className={styles.navLinkWrapper}>
          <Link className={styles.navLink} href="/">
            Home
          </Link>
          <Link className={styles.navLink} href="#About">
            About
          </Link>
          <Link className={styles.navLink} href="#Experience">
            Experience
          </Link>
          <Link className={styles.navLink} href="#Certificates">
            Certificates
          </Link>
          <Link className={styles.navLink} href="#Portfolio">
            Portfolio
          </Link>
          {/*           <Link className={styles.navLink} href="#Testimonials">
            Testimonials
          </Link> */}
          <Link className={styles.navLink} href="#Contact">
            Contact
          </Link>
        </ul>

        {/* Mobile Button */}
        <div className={styles.menuIcons} onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Mobile Menu */}
        <div className={styles.mobileNavLinkWrapper}>
          {isOpen && (
            <ul className={styles.mobileLinks}>
              <Link className={styles.navLink} href="/">
                Home
              </Link>
              <Link className={styles.navLink} href="#About">
                About
              </Link>
              <Link className={styles.navLink} href="#Experience">
                Experience
              </Link>
              <Link className={styles.navLink} href="#Portfolio">
                Portfolio
              </Link>
              <Link className={styles.navLink} href="#Testimonials">
                Testimonials
              </Link>
              <Link className={styles.navLink} href="#Contact">
                Contact
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
