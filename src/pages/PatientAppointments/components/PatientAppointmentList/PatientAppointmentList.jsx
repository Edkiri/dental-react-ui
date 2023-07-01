import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PatientAppointmentsContext from '../../contexts/PatientAppointmentContext';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

export default function PatientAppointmentList() {
  const { loading, error, appointments, getAll } = useContext(
    PatientAppointmentsContext,
  );

  useEffect(() => getAll, []);

  const navigate = useNavigate();

  const handleDetailNav = (appointmentId) => {
    navigate(`/appointment/${appointmentId}`);
  };
  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}

      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment._id}
          appointment={appointment}
          handleDetail={handleDetailNav}
        />
      ))}
    </>
  );
}
