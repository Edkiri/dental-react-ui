import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppointmentCard } from './components';
import PatientAppointmentsContext from './contexts/PatientAppointmentContext';
import './PatientAppointmentsList.css';

export default function PatientAppointmentsList() {
  const { loading, error, appointments, getAll } = useContext(
    PatientAppointmentsContext,
  );
  const navigate = useNavigate();

  useEffect(() => getAll, []);


  const handleDetailNav = (appointmentId) => {
    navigate(`/appointment/${appointmentId}`);
  };

  return (
    <div className="my-appointments-container">
      <h1>Mis citas</h1>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}

      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment._id}
          appointment={appointment}
          handleDetail={handleDetailNav}
        />
      ))}
    </div>
  );
}
