import React from 'react'
import styles from '../styles/Experience.module.css'
import {BsPatchCheck} from 'react-icons/bs';
import {BsCircle} from 'react-icons/bs';
import {BsCircleHalf} from 'react-icons/bs';
import {BsCircleFill} from 'react-icons/bs';

function Experience() {
  return (
    <section id='Experience'> 
      <h5 className={styles.sectionH5}> Skills I Have</h5>
      <h2 className={styles.sectionH2}>My Experience</h2>

      <div className={styles.experienceContainer}>
        <div className={styles.experienceFrontend}>
          <h3 className={styles.experienceContainerH3}>Frontend Development</h3>
          <div className={styles.experienceContent}>
            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>HTML</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircleHalf/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>CSS</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircleHalf/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>JavaScript</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>React.js</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>Next.js</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleHalf/> <BsCircle/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>Wordpress</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></div>
              </div>
            </article>

          </div>
        </div>
        {/* END OF FRONTEND INFO */}

        <div className={styles.experienceOther}>
          <h3 className={styles.experienceContainerH3}>Other Skills</h3>
          <div className={styles.experienceContent}>
          <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>Scrum</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleHalf/> <BsCircle/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>GitHub</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>Figma</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>Surge</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>Canva</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircleHalf/> <BsCircle/></div>
              </div>
            </article>

            <article className={styles.experienceDetails}>
              <BsPatchCheck className={styles.experienceDetailsIcon}/>
              <div>
                <h4 className={styles.experienceDetailsH4}>Adobe Photoshop & Lightroom</h4>
                <div className={styles.experienceDetailsCircles}><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></div>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience