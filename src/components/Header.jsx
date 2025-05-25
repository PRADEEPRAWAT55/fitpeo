import { FiSearch, FiBell, FiPlus } from "react-icons/fi";
import styles from "../styles/Header.module.css";
import profileImage from "../assets/images/vecteezy_3d-cartoon-man-with-glasses-and-beard-illustration_51767450.png";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <span className={styles.logoFirst}>Health</span>
      <span className={styles.logoSecond}>care.</span>
    </div>
    <div className={styles.searchBar}>
      <FiSearch className={styles.searchIcon} />
      <input type="text" placeholder="Search..." readOnly />
      <span>
        <FiBell className={styles.icon} />
      </span>
    </div>
    <div className={styles.actions}>
      <div className={styles.actionsContainer}>
        <div className={styles.profile}>
          <img src={profileImage} alt="User profile" />
        </div>
        <div className={styles.iconContainer}>
          <FiPlus className={styles.icon} />
        </div>{" "}
      </div>
    </div>
  </header>
);

export default Header;
