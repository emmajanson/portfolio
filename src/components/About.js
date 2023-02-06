import React from 'react';
import styles from "../styles/About.module.css";
import '../../public/profileImg.png'
import {BsGeoAlt} from 'react-icons/bs';
import {BsCalendarEvent} from 'react-icons/bs';
import {BsHeart} from 'react-icons/bs';
import { motion as m } from "framer-motion"
import Link from 'next/link';
import '../../public/CV.pdf'

function About() {

  return (
    <section id='About'>
      <h5 className={styles.sectionH5}>Get To Know</h5>
      <h2 className={styles.sectionH2}>About Me</h2>
      
      <div className={styles.aboutContainer}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeImgWrapper}>
            <img className={styles.aboutMeImg} src='profileImg.png' alt='About Image' />
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutCards}>
            <article className={styles.aboutCard}>
              <BsGeoAlt className={styles.aboutIcon} />
              <h4 className={styles.aboutCardH4}>Location</h4>
              <h5 className={styles.aboutCardH5}>Gothenburg, Sweden</h5>
            </article>

            <article className={styles.aboutCard}>
              <BsCalendarEvent className={styles.aboutIcon} />
              <h4 className={styles.aboutCardH4}>Age</h4>
              <h5 className={styles.aboutCardH5}>I'm 25 years young</h5>
            </article>

            <article className={styles.aboutCard}>
              <BsHeart className={styles.aboutIcon} />
              <h4 className={styles.aboutCardH4}>Favorites</h4>
              <h5 className={styles.aboutCardH5}>Pepsi max, EDM music and traveling</h5>
            </article>
          </div>

          <p className={styles.aboutContentParagraph}>
          Driven, structured and always open to new development challenges - 3 phrases that describe me very 
          well as a person, both according to myself and my close ones. I came in contact with HTML and CSS 
          for the first time in 2010, when I was only 12 years old. Today, I am further educating myself as a 
          front-end developer to fulfill a bit of a childhood dream - and to work with something I really love!
          </p> 

          <div className={styles.aboutBtns}>
          <Link href='#contact' className={styles.btnPrimary}>Let's Talk!</Link>
          <a href='cv.pdf' download className={styles.btnPrimary}>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About