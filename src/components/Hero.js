import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import '../../public/heroImg.png'
import { motion as m } from "framer-motion"
  
function Hero() {
  return (
    <section className={styles.heroSection}>
          <img className={styles.heroImg} src="heroImg.png" alt="Hero Image"></img>
    </section>
  )
}

export default Hero 