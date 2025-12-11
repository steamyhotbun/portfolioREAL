import React from 'react';
import styles from './ContactTab.module.scss';
import ContactTabSVG from '../../assets/icons/nav_contact.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

function ContactTab() {
  return (
    <div className={styles.contactTab}>
      <div className={styles.tabBox}>
        <img
          src={ContactTabSVG}
          alt="Contact Tab"
          className={styles.tabImage}
        />
        <div className={styles.tabContent}>
          <a
            href="https://github.com/steamyhotbun"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <FaGithub size={60} />
          </a>
          <a
            href="mailto:atalavera@bcit.ca"
            className={styles.iconLink}
            aria-label="Email"
          >
            <MdOutlineMail size={60} />
          </a>
          <a
            href="https://www.linkedin.com/in/alden-talavera/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={60} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ContactTab);