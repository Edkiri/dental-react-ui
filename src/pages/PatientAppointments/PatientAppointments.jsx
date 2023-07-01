import { useNavigate } from 'react-router-dom';

import usePatientAppointment from './hooks/usePatientAppointments';
import AppointmentCard from './components/AppointmentCard/AppointmentCard';
import './PatientAppointments.css';

export default function PatientAppointments() {
  const { loading, error, appointments } = usePatientAppointment();
  const navigate = useNavigate();

  const handleDetailNav = (appointmentId) => {
    navigate(`/appointment/${appointmentId}`);
  };

  return (
    <div className="my-appointments-container">
      <h1>Mis citas</h1>

      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}

      {appointments.map((appointment) => (
        <AppointmentCard appointment={appointment} handleDetail={handleDetailNav} />
      ))}
    </div>
  );
}
