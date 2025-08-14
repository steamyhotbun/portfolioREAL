import styles from './ContactTab.module.scss';
import ContactTabSVG from '../assets/CONTACT_TAB.svg';
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

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
            className={styles.iconLink}
          >
            <FaGithub size={40} />
          </a>
          <a
            href="mailto:atalavera@bcit.ca"
            className={styles.iconLink}
          >
            <MdOutlineMail size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/alden-talavera/"
            target="_blank"
            className={styles.iconLink}
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactTab;