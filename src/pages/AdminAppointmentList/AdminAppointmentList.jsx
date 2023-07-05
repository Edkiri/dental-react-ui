import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppointments } from '@/contexts/appointments/hooks';
import { AppointmentCard } from '../PatientAppointmentsList/components';
import { DFilledButton, DFormInput } from '@/components/Core';
import useInputForm from '@/hooks/useInputForm';
import './AdminAppointmentList.css';

export default function AdminAppointmentList() {
  const { appointments, getAll } = useAppointments();
  const navigate = useNavigate();
  const patientName = useInputForm('');
  const dentistName = useInputForm('');

  useEffect(() => {
    getAll({
      patientName: patientName.value,
      dentistName: dentistName.value.trim(),
    });
  }, []);

  const searchAppointments = (e) => {
    e.preventDefault();
    if (!dentistName.value.trim() || !patientName.value.trim()) return;

    getAll({
      patientName: patientName.value,
      dentistName: dentistName.value.trim(),
    });
  };

  const handleDetailNav = (appointmentId) => {
    navigate(`/appointment/${appointmentId}`);
  };

  return (
    <>
      <h1>Citas</h1>
      <form className="filter-form">
        <div className="filter-form-header">
          <DFormInput label="Paciente" {...patientName} />
          <DFormInput label="Dentista" {...dentistName} />
        </div>
        <DFilledButton
          label="Filtrar"
          onClick={searchAppointments}
          type="submit"
        />
      </form>
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
