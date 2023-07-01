import { PatientAppointmentList } from './components';
import './PatientAppointments.css';

export default function PatientAppointments() {
  return (
    <div className="my-appointments-container">
      <h1>Mis citas</h1>
      <PatientAppointmentList />
    </div>
  );
}
