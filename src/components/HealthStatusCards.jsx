import styles from '../styles/HealthStatusCards.module.css';

const HealthStatusCards = () => (
  <div className={styles.cardsContainer}>
    <div className={styles.card}>
      <h4>Lungs</h4>
      <span className={styles.statusWarning}>Check Needed</span>
      <p>Last checked: 15 Oct 2021</p>
    </div>
    <div className={styles.card}>
      <h4>Teeth</h4>
      <span className={styles.statusHealthy}>Healthy</span>
      <p>Last checked: 12 Oct 2021</p>
    </div>
    <div className={styles.card}>
      <h4>Bone</h4>
      <span className={styles.statusHealthy}>Healthy</span>
      <p>Last checked: 10 Oct 2021</p>
    </div>
  </div>
);

export default HealthStatusCards;