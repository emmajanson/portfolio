import React from 'react';
import Image from 'next/image';
import styles from '../styles/Portfolio.module.css';
import starwarsMockup from '../../public/portfolioMockups/starwarsMockup.svg';
import recipeAppMockup from '../../public/portfolioMockups/recipeAppMockup.svg';
import krukmakerietMockup from '../../public/portfolioMockups/krukmakerietMockup.svg';
import tennisScoreboardMockup from '../../public/portfolioMockups/tennisScoreboardMockup.svg';
import esmeraldaTalloMockup from '../../public/portfolioMockups/esmeraldaTalloMockup.svg'

const data = [
  {
    id: 1,
    image: starwarsMockup,
    title: "Star Wars App",
    description: "This is my very first JavaScript project. Unfortunately there is no Live Demo on this one.",
    github: "https://github.com/emmajanson/startwarsassignment",
  },
  {
    id: 2,
    image: recipeAppMockup,
    title: "Recipe App",
    description: "My first project in React. An assignment in school where we practiced React and API's.",
    github: "https://github.com/emmajanson/recipeapp",
    demo: "https://emmajanson_recipeapp.surge.sh/",
  },
  {
    id: 3,
    image: krukmakerietMockup,
    title: "Krukmakeriet",
    description: "Another schoolassignment made in React. A groupproject where we made an online store with both products and courses.",
    github: "https://github.com/emmajanson/krukmakeriet",
    demo: "https://emmajanson_krukmakeriet.surge.sh/",
  },
  {
    id: 4,
    image: tennisScoreboardMockup,
    title: "Tennis Scoreboard",
    description: "A small project in React which I did as a test for an internship. I might not get the tennis score system right though. But hey - it was the code that mattered here.",
    github: "https://github.com/emmajanson/TennisScoreboard",
    demo: "https://emmajanson_tennisscoreboard.surge.sh/",
  },
  {
    id: 4,
    image: esmeraldaTalloMockup,
    title: "Esmeralda Tällö",
    description: "My very first project as a freelancer. One of the participants of the swedish TV show 'Elitstyrkans hemligheter' in 2023 wanted a website where schools and companies can book her as an inspirational speaker. I also made the logo for her and her new brand.",
    github: "https://github.com/emmajanson/esmeraldatallo",
    demo: "https://esmeraldatallo.se",
  },
];

function Portfolio() {
  return (
    <section id="Portfolio">
      <h5 className={styles.sectionH5}>My Recent Work</h5>
      <h2 className={styles.sectionH2}>Portfolio</h2>

      <div className={styles.portfolioContainer}>
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className={styles.portfolioItem}>
              <Image
                className={styles.portfolioItemImage}
                src={image}
                alt={title}
              />
              <div className={styles.portfolioOverlay}>
                <h3 className={styles.portfolioH3}>{title}</h3>
                <p className={styles.portfolioParagraph}>{description}</p>
                <div className={styles.btnWrapper}>
                  <a href={demo} className={styles.btnPrimary} target="_blank">
                    Live demo
                  </a>
                  <a
                    href={github}
                    className={styles.btnPrimary}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  ); 
}

export default Portfolio;
