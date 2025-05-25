import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time }) => (
  <div className="simple-appointment-card">
    <h4>{title}</h4>
    <p>{time}</p>
  </div>
);

export default SimpleAppointmentCard;