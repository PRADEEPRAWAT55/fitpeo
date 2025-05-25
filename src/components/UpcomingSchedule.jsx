import { upcomingSchedule } from '../data/schedule';
import styles from '../styles/UpcomingSchedule.module.css';

const UpcomingSchedule = () => (
  <div className={styles.scheduleContainer}>
    <h3 className={styles.heading}>The Upcoming Schedule</h3>
    {upcomingSchedule.map(({ day, appointments }) => (
      <div key={day} className={styles.dayGroup}>
        <h4 className={styles.dayHeading}>On {day}</h4>
        <div className={styles.appointmentRow}>
          {appointments.map(({ title, time, icon }) => (
            <div key={title} className={styles.appointmentCard}>
              <span className={styles.icon}>{icon}</span>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>{title}</div>
                <div className={styles.cardTime}>{time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
