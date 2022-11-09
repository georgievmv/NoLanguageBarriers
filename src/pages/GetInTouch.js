import React from "react";
import styles from "./GetInTouch.module.css";
const GetInTouch = () => {
  return (
    <div id="getInTouch" className={styles.container}>
      <h1 className={styles.heading}>Get in touch!</h1>
      <div className={styles.content}>
        <div className={styles.directly}></div>
        <div className={styles.separator}></div>
        <div className={styles.contactForm}>
          <p>Or fill in our contact form</p>
          <form>
            <div className={styles.inputGroup}>
              <label for="name">Name:</label>
              <input
                placeholder="Enter your name here"
                name="name"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <label for="email">Email:</label>
              <input
                placeholder="Enter your email adress here"
                name="email"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <label for="subject">Subject:</label>
              <input
                placeholder="Type your subject here"
                name="subject"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <label for="message">Message:</label>
              <input
                placeholder="Type your message here"
                name="message"
                type="text"
              />
            </div>
            <button className={styles.button} type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
