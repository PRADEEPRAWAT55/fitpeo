import styles from "../styles/CalendarView.module.css";
import { CALENDARDATA } from "../data/calendar";

const CalendarView = () => {
  const { days, dates, times } = CALENDARDATA;
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h3>October 2021</h3>
        <div className={styles.nav}>
          <span>&larr;</span>
          <span>&rarr;</span>
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {days.map((day, dayIndex) => (
          <div
            key={dayIndex}
            className={`${styles.dayColumn} ${
              dates[dayIndex] === 26 ? styles.highlightColumn : ""
            }`}
          >
            <div className={styles.dayLabel}>{day}</div>
            <div
              className={`${styles.date} ${dates[dayIndex] === 26 ? "" : ""}`}
            >
              {dates[dayIndex]}
            </div>

            {times.map((row, rowIndex) => {
              const time = row[dayIndex];
              return (
                <div
                  key={`${rowIndex}-${dayIndex}`}
                  className={`${styles.timeSlot}
                    ${time === "—" ? styles.dash : ""}
                    ${
                      dates[dayIndex] === 26 && time === "09:00"
                        ? styles.selectedTime
                        : ""
                    }
                    ${
                      (dates[dayIndex] === 28 && time === "11:00") ||
                      (dates[dayIndex] === 30 && time === "12:00") ||
                      (dates[dayIndex] === 31 && time === "09:00")
                        ? styles.selectedTimefade
                        : ""
                    }
                    
                    
                    `}
                >
                  {time}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className={styles.appointments}>
        <div className={styles.appointmentCardBlue}>
          <div className={styles.appointmentIcon}>🦷</div>
          <div>
            <div className={styles.appointmentTitle}>Dentist</div>
            <div className={styles.appointmentTime}>09:00–11:00</div>
            <div className={styles.appointmentDoctor}>
              Dr. Cameron Williamson
            </div>
          </div>
        </div>

        <div className={styles.appointmentCardPurple}>
          <div className={styles.appointmentIcon}>💪</div>
          <div>
            <div className={styles.appointmentTitle}>
              Physiotherapy Appointment
            </div>
            <div className={styles.appointmentTime}>11:00–12:00</div>
            <div className={styles.appointmentDoctor}>Dr. Kevin Djones</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
