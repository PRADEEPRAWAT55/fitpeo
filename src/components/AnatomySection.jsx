import styles from "../styles/AnatomySection.module.css";
import bodyImage from "../assets/images/human.png";
import { FaTooth, FaLungs, FaBone, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const AnatomySection = () => (
  <div className={styles.anatomyContainer}>
    <div className={styles.leftSection}>
      <div className={styles.anatomySectionHeader}>
        <h3 href="#">DASHBOARD</h3>
      </div>
      <div className={styles.bodyWrapper}>
        <img src={bodyImage} alt="Human Body" className={styles.bodyImage} />

        <div className={`${styles.healthTag} ${styles.heart}`}>
          Healthy Heart
        </div>
        <div className={`${styles.healthTag} ${styles.leg}`}>Healthy Leg</div>
      </div>
    </div>

    <div className={styles.rightSection}>
      <div className={styles.cardsHeader}>
        <a href="#">
          This Week <IoIosArrowDown />
        </a>
      </div>

      <div className={styles.healthCard}>
        <div>
          <div className={styles.cardIcon}>
            <span style={{ fontSize: "1.5rem" }}>🫁</span>
            <h4>Lungs</h4>
          </div>
          <p>Date: 26 Oct 2021</p>
          <div className={styles.progressBar}>
            <div className={styles.progressRed} style={{ width: "80%" }} />
          </div>
        </div>
      </div>

      <div className={styles.healthCard}>
        <div>
          <div className={styles.cardIcon}>
            <span style={{ fontSize: "1.5rem" }}>🦷</span>
            <h4>Teeth</h4>
          </div>
          <p>Date: 26 Oct 2021</p>
          <div className={styles.progressBar}>
            <div className={styles.progressGreen} style={{ width: "80%" }} />
          </div>
        </div>
      </div>

      <div className={styles.healthCard}>
        <div>
          <div className={styles.cardIcon}>
            <span style={{ fontSize: "1.5rem" }}>🦴</span>
            <h4>Bone</h4>
          </div>
          <p>Date: 26 Oct 2021</p>
          <div className={styles.progressBar}>
            <div className={styles.progressOrange} style={{ width: "75%" }} />
          </div>
        </div>
      </div>

      <div className={styles.cardsFooter}>
        <a href="#">
          Details <FaLongArrowAltRight />
        </a>
      </div>
    </div>
  </div>
);

export default AnatomySection;
