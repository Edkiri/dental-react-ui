import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppointments } from '@/contexts/appointments/hooks';
import { AppointmentCard } from '../PatientAppointmentsList/components';
import { DButton, DFilledButton, DFormInput } from '@/components/Core';
import useInputForm from '@/hooks/useInputForm';
import './AdminAppointmentList.css';
import { AppointmentStatusSelector } from '@/components/Appointment';

export default function AdminAppointmentList() {
  const { appointments, getAll, count } = useAppointments();
  const navigate = useNavigate();
  const patientName = useInputForm('');
  const dentistName = useInputForm('');
  const startDate = useInputForm('');
  const endDate = useInputForm('');
  const [selectedStatus, setSelectedStatus] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);

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
    if (selectedStatus !== 'Todos') {
      query.status = selectedStatus;
    }
    const skip = (currentPage - 1) * 4;
    query.skip = skip;

    getAppointments(query);
  }, [currentPage]);

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
    if (selectedStatus !== 'Todos') {
      query.status = selectedStatus;
    }
    const skip = (currentPage - 1) * 4;
    query.skip = skip;

    getAppointments(query);
    setCurrentPage(1);
  };

  const handleDetailNav = (appointmentId) => {
    navigate(`/appointment/${appointmentId}`);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pagesCount = Math.ceil(count / 4) || 1;

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
        <AppointmentStatusSelector
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <DFilledButton
          label="Filtrar"
          onClick={searchAppointments}
          type="submit"
        />
      </form>
      <div className="filter-control">
        <div className="control-buttons">
          <DButton
            label="Regresar"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          />
          <span>
            Página {currentPage} de {pagesCount}
          </span>
          <DButton
            label="Siguiente"
            disabled={currentPage === pagesCount}
            onClick={handleNextPage}
          />
        </div>
      </div>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      <div className="appointment-list">
        {appointments.length ? (
          appointments.map((appointment) => (
            <AppointmentCard
              key={appointment._id}
              appointment={appointment}
              handleDetail={handleDetailNav}
            />
          ))
        ) : (
          <p>No se han encontrado citas</p>
        )}
      </div>
    </>
  );
}
