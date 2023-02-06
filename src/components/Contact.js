import React from 'react';
import styles from '../styles/Contact.module.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0c89et4', 'template_wsu7b8h', form.current, 'eT4mLok0H0u9GX9B-')

    e.target.reset() 
  };

  return (
    <section id='Contact'>
      <h5 className={styles.sectionH5}>Get In Touch</h5>
      <h2 className={styles.sectionH2}>Contact Me</h2>

      <div className={styles.contactContainer}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input className={styles.input} type="text" name='name' placeholder='Your full name' required />
          <input className={styles.input} type="email" name='email' placeholder='Your email' required />
          <textarea className={styles.textarea} name="message" rows="6" placeholder='Your message' required></textarea>
          <button type='submit' className={styles.btnPrimary}>Send message!</button>
        </form>
      </div>
    </section>
  )
}

export default Contact