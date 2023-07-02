import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppointments } from '@/contexts/appointments/hooks';
import { AppointmentCard } from '../PatientAppointmentsList/components';
import './AdminAppointmentList.css';

export default function AdminAppointmentList() {
  const { appointments, getAll } = useAppointments();
  const navigate = useNavigate();

  useEffect(() => getAll, []);

  const handleDetailNav = (appointmentId) => {
    navigate(`/appointment/${appointmentId}`);
  };

  return (
    <>
      <h1>Citas</h1>
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
