import styled from "../styles/ActivityFeed.module.css";
import { ACTIVITYDATA } from "../data/schedule";

const COLORS = ["#D1D5DB", "#06B6D4", "#6366F1", "#4B5563"];

const activityData = ACTIVITYDATA;

const ActivityChart = () => (
  <div className={styled.chartContainer}>
    <div className={styled.chartHeader}>
      <h3>Activity</h3>
      <span>3 appointment on this week</span>
    </div>
    <div className={styled.chartWeek}>
      {Object.entries(activityData).map(([day, bars]) => (
        <div key={day} className={styled.dayBlock}>
          <div className={styled.bars}>
            {bars.map((value, index) => (
              <div
                key={index}
                className={styled.bar}
                style={{
                  height: `${value}px`,
                  backgroundColor: COLORS[index % COLORS.length],
                }}
              />
            ))}
          </div>
          <span className={styled.dayLabel}>{day.slice(0, 3)}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityChart;
