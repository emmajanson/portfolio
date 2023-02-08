import React from 'react';
import Link from 'next/link';
import '../../public/portfolioLogo.svg'
import styles from '../styles/Footer.module.css'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src='portfolioLogo.svg' href="#" className={styles.footerLogo} />

      <ul className={styles.permalinks}>
        <Link className={styles.footerLink} href="#">Home</Link>
        <Link className={styles.footerLink} href="#about">About</Link>
        <Link className={styles.footerLink} href="#experience">Experience</Link>
        <Link className={styles.footerLink} href="#portfolio">Portfolio</Link>
        <Link className={styles.footerLink} href="#testimonials">Testimonials</Link>
        <Link className={styles.footerLink} href="#contact">Contact</Link>
      </ul>

      <div className={styles.footerSocials}>
        <Link className={styles.footerSocialLink} href="https://www.github.com/emmajanson"><FaGithub/></Link>
        <Link className={styles.footerSocialLink} href="https://www.linkedin.com/in/emma-janson-222200b7/"><FaLinkedin/></Link>
        <Link className={styles.footerSocialLink} href="mailto:janson.emma@outlook.com"><FaEnvelope/></Link>
      </div>

      <div className={styles.footerCopyright}>
        <p className={styles.footerCopyrightParagraph}>
          &copy; Emma Janson 2023
        </p>
      </div> 
    </footer>
  )
}

export default Footer