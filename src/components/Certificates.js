import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Certificates.module.css';

import htmlCert from '../../public/htmlCert.jpeg';
import cssCert from '../../public/cssCert.jpeg';
import javaScriptCert from '../../public/javaScriptCert.jpeg';
import reactCert from '../../public/reactCert.jpeg';

const certImages = [
    {
        id: 1,
        image: htmlCert,
        certName: 'HTML Cert',
    }, 
    {
        id: 2,
        image: cssCert,
        certName: 'CSS Cert',
    }, 
    {
        id: 3,
        image: javaScriptCert,
        certName: 'JavaScript Cert',
    }, 
    {
        id: 4,
        image: reactCert,
        certName: 'React Cert',
    }
];

function Certificates() {
  return (
    <section id="Certificates">
      <h5 className={styles.sectionH5}>Knowledge I Have</h5>
      <h2 className={styles.sectionH2}>Certificates</h2>

      <div className={styles.certContainer}>
        <motion.div className={styles.carousel}>
          <motion.div className={styles.innerCarousel}>
            {certImages.map(({id, image, certName}) => {
                return (
                    <motion.div key={id} className={styles.carouselItem}>
                        <Image className={styles.carouselItemImg} src={image} alt={certName} />
                    </motion.div>
                );
            })}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

export default Certificates;
