import React from "react";
import styles from "./GetInTouch.module.css";
import {
  phoneIcon,
  emailIcon,
  whatsAppIcon,
  viberIcon,
  facebookIcon,
  linkedInIcon,
  youtubeIcon,
  instaIcon,
} from "../assets/icons";
import Contacts from "../components/Contacts";
const GetInTouch = () => {
  return (
    <div id="getInTouch" className={styles.container}>
      <h1 className={styles.heading}>Get in touch!</h1>
      <div className={styles.content}>
        <div className={styles.directly}>
          <p>Reach us directly by:</p>
          <Contacts icon={phoneIcon} type="Phone:" contact="+359 887 320 313" />
          <Contacts
            icon={emailIcon}
            type="Email:"
            contact="ivanilev@nolanguagebarriers.com"
          />
          <Contacts
            icon={whatsAppIcon}
            type="Whatsapp:"
            contact="+359 887 320 313"
          />
          <Contacts icon={viberIcon} type="Viber:" contact="+359 887 320 313" />
          <div className={styles.social}>
            <div className={styles.socialIcon}>{facebookIcon}</div>
            <div className={styles.socialIcon}>{linkedInIcon}</div>
            <div className={styles.socialIcon}>{youtubeIcon}</div>
            <div className={styles.socialIcon}>{instaIcon}</div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.contactForm}>
          <p>Or fill in our contact form</p>
          <form>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name:</label>
              <input
                placeholder="Enter your name here"
                name="name"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input
                placeholder="Enter your email adress here"
                name="email"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="subject">Subject:</label>
              <input
                placeholder="Type your subject here"
                name="subject"
                type="text"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message:</label>
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
