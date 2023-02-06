import Link from 'next/link';
import React from 'react';
import styles from '../styles/Portfolio.module.css';
/* import IMG1 from '../../Media/mockup1.jpg';
import IMG2 from '../../Media/mockup2.jpg';
import IMG3 from '../../Media/mockup3.jpg'; */

/* const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Recipe App',
    github: 'https://github.com/emmajanson/recipeapp'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Wedding Photo App',
    github: 'https://github.com/emmajanson/weddingphotoapp'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Krukmakeriet',
    github: 'https://github.com/emmajanson/krukmakeriet'
  },
] */

function Portfolio() {
  return (
    <section id="Portfolio">
      <h5 className={styles.sectionH5}>My Recent Work</h5>
      <h2 className={styles.sectionH2}>Portfolio</h2>

      <div className={styles.portfolioContainer}>
        <article className={styles.portfolioItem}>
          <h1 className={styles.portfolioItemH1}>COMING SOON!</h1>
          <p className={styles.portfolioItemParagraph}>
            Please check out my Github in the meantime
          </p>
          <div className={styles.portfolioItemCta}>
            <Link
              href="https://github.com/emmajanson"
              className={styles.btnPrimary}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
