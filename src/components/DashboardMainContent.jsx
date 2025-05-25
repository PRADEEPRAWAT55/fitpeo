import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import AnatomySection from './AnatomySection';
import styles from '../styles/DashboardMainContent.module.css';

const DashboardMainContent = () => (
  <main className={styles.mainContent}>
    <div className={styles.gridContainer}>
      <section className={styles.overviewSection}>
        <AnatomySection />
      </section>
      <section className={styles.calendarSection}>
        <CalendarView />
      </section>
      <section className={styles.scheduleSection}>
        <ActivityFeed />
      </section>
      <section className={styles.activitySection}>
        <UpcomingSchedule />
      </section>
    </div>
  </main>
);

export default DashboardMainContent;