import { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAppointmentDetail } from '@/contexts/appointments/hooks';
import { formatDate, formatTimeString } from '@/utils/utils';
import {
  AppointmentDeleteModal,
  AppointmentStatus,
} from '@/components/Appointment';
import { DentistProfile } from '@/components/Dentist';
import { ServiceDetail } from '@/components/Service';
import { DButton, DCancelButton } from '@/components/Core';
import { AuthContext } from '@/contexts';
import { cancelAppointment, confirmAppointment } from '@/api';
import './AppointmentDetail.css';
import AppointmentConfirmModal from '@/components/Appointment/AppointmentConfirmModal/AppointmentConfirmModal';

export default function AppointmentDetail() {
  const { appointmentId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const { appointment } = useAppointmentDetail({ appointmentId });

  const patientName = `${appointment?.patient.profile.firstName} ${appointment?.patient.profile.lastName}`;

  const handleUpdate = (appointmentId) => {
    navigate(`/update-appointment/${appointmentId}`);
  };

  const openDeleteModal = () => {
    setIsDeleting(true);
  };
  const openConfirmModal = () => {
    setIsConfirming(true);
  };
  const hideDeleteModal = () => {
    setIsDeleting(false);
  };
  const hideConfirmModal = () => {
    setIsConfirming(false);
  };

  const isDentist =
    user.roles.includes('admin') || user.roles.includes('dentist');

  const handleDelete = async (cancelledReason) => {
    try {
      await cancelAppointment({
        appointmentId: appointmentId,
        appointmentData: {
          cancelledReason,
        },
        token: user.token,
      });
      navigate('/my-appointments');
    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirm = async ({ time, serviceId, dentistId }) => {
    try {
      const date = new Date(appointment.datetime);
      const [hoursToAdd, minutesToAdd] = time.split(':');
      date.setHours(date.getHours() + parseInt(hoursToAdd, 10));
      date.setMinutes(date.getMinutes() + parseInt(minutesToAdd, 10));
      console.log(date);
      await confirmAppointment({
        token: user.token,
        appointmentId: appointment._id,
        datetime: new Date(date).toISOString(),
        serviceId,
        dentistId,
      });
      navigate('/appointments');
    } catch (err) {
      console.log(err);
    }
  };

  const canUpdate =
    user.roles.includes('admin') || appointment.patient._id === user._id;

  return (
    <div className="appointment-detail-container">
      <Link
        className="navigate-back"
        to={user.roles.includes('admin') ? '/appointments' : 'my-appointments'}
      >
        {user.roles.includes('admin') ? '<< Citas' : '<< Mis citas'}
      </Link>
      {appointment && (
        <>
          <header>
            <div className="appointment-detail-info">
              <AppointmentStatus status={appointment?.status} />
              <p className="appointment-card-date">
                <strong>Fecha: </strong>
                {formatDate(appointment.datetime)}
              </p>
              {appointment.status === 'confirmed' && (
                <p className="appointment-card-date">
                  <strong>Hora: </strong>
                  {formatTimeString(appointment.datetime)}
                </p>
              )}
            </div>
            {appointment.dentist && (
              <DentistProfile dentist={appointment.dentist} />
            )}
          </header>
          {appointment.service && (
            <ServiceDetail
              service={appointment.service}
              price={appointment.price}
            />
          )}
          {user.roles.includes('dentist') && (
            <div className="appointment-card-patient-container">
              <div>
                <h5>Paciente:</h5>
                <p>{patientName}</p>
              </div>
              <div>
                <h5>Teléfono:</h5>
                <p>{appointment?.patient.profile.phoneNumber}</p>
              </div>
            </div>
          )}
          <div className="appointment-detail-reason">
            <strong>Motivo:</strong>
            <span>{appointment.reason}</span>
          </div>
          {appointment.status === 'cancelled' && (
            <div className="appointment-detail-cancelled">
              <strong>Cacelado por:</strong>
              <span>{appointment.cancelledReason}</span>
            </div>
          )}

          <div className="appointment-detail-control">
            {appointment.status === 'requested' && (
              <>
                <DCancelButton
                  label="Cancelar cita"
                  onClick={openDeleteModal}
                />
                {isDentist && (
                  <DButton label="Confirmar" onClick={openConfirmModal} />
                )}
                {canUpdate && (
                  <DButton
                    label="Actualizar"
                    onClick={() => handleUpdate(appointment._id)}
                  />
                )}
              </>
            )}
          </div>
        </>
      )}
      {isDeleting && (
        <AppointmentDeleteModal
          onSubmit={handleDelete}
          hide={hideDeleteModal}
        />
      )}
      {isConfirming && (
        <AppointmentConfirmModal
          onSubmit={handleConfirm}
          hide={hideConfirmModal}
          appointment={appointment}
        />
      )}
    </div>
  );
}
