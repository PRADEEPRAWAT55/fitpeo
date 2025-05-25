import styles from '../styles/Sidebar.module.css';
import {
  FiGrid,
  FiClock,
  FiCalendar,
  FiUsers,
  FiBarChart2,
  FiMessageCircle,
  FiPhone,
  FiSettings,
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div>
        <h3 className={styles.sectionTitle}>General</h3>
        <ul className={styles.navList}>
          <li className={styles.navItem}><FiGrid /> Dashboard</li>
          <li className={styles.navItem}><FiClock /> History</li>
          <li className={styles.navItem}><FiCalendar /> Calendar</li>
          <li className={styles.navItem}><FiUsers /> Appointments</li>
          <li className={styles.navItem}><FiBarChart2 /> Statistics</li>
        </ul>

        <h3 className={styles.sectionTitle}>Tools</h3>
        <ul className={styles.navList}>
          <li className={styles.navItem}><FiMessageCircle /> Chat</li>
          <li className={styles.navItem}><FiPhone /> Support</li>
        </ul>
      </div>

      <ul className={`${styles.navList} ${styles.bottomSetting}`}>
        <li className={styles.navItem}><FiSettings /> Setting</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
