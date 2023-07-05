import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppointments } from '@/contexts/appointments/hooks';
import { AppointmentCard } from '../PatientAppointmentsList/components';
import { DFilledButton, DFormInput } from '@/components/Core';
import useInputForm from '@/hooks/useInputForm';
import './AdminAppointmentList.css';
import { AppointmentStatusSelector } from '@/components/Appointment';

export default function AdminAppointmentList() {
  const { appointments, getAll } = useAppointments();
  const navigate = useNavigate();
  const patientName = useInputForm('');
  const dentistName = useInputForm('');
  const startDate = useInputForm('');
  const endDate = useInputForm('');
  const [selectedStatus, setSelectedStatus] = useState('Todos');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAppointments = async (query) => {
    try {
      setLoading(true);
      await getAll(query);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const searchAppointments = (e) => {
    e.preventDefault();
    let query = {
      patientName: patientName.value.trim(),
      dentistName: dentistName.value.trim(),
    };
    if (startDate.value) {
      query.startDate = new Date(startDate.value).toISOString();
    }
    if (endDate.value) {
      query.endDate = new Date(endDate.value).toISOString();
    }
    getAppointments(query);
  };

  const handleDetailNav = (appointmentId) => {
    navigate(`/appointment/${appointmentId}`);
  };

  const appointmentsToPrint = appointments.filter((appointment) => {
    if (selectedStatus !== 'Todos') {
      return appointment.status === selectedStatus;
    }
    return appointment;
  });

  return (
    <>
      <h1>Citas</h1>
      <form className="filter-form">
        <div className="filter-form-header">
          <div className="names-container">
            <DFormInput label="Paciente" {...patientName} />
            <DFormInput label="Dentista" {...dentistName} />
          </div>

          <div className="date-container">
            <div className="date-container">
              <DFormInput
                label="Desde:"
                type="date"
                id="startDate"
                {...startDate}
              />
            </div>

            <div className="date-container">
              <DFormInput
                label="Hasta:"
                type="date"
                id="endDate"
                {...endDate}
              />
            </div>
          </div>
        </div>
        <DFilledButton
          label="Filtrar"
          onClick={searchAppointments}
          type="submit"
        />
        <AppointmentStatusSelector
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      </form>

      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}

      <div className="appointment-list">
        {appointmentsToPrint.length ? (
          appointmentsToPrint.map((appointment) => (
            <AppointmentCard
              key={appointment._id}
              appointment={appointment}
              handleDetail={handleDetailNav}
            />
          ))
        ): (
          <p>No se han encontrado citas</p>
        )}
      </div>
    </>
  );
}
