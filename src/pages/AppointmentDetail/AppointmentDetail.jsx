import { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAppointmentDetail } from '@/contexts/appointments/hooks';
import { formatDate } from '@/utils/utils';
import {
  AppointmentDeleteModal,
  AppointmentStatus,
} from '@/components/Appointment';
import { DentistProfile } from '@/components/Dentist';
import { ServiceDetail } from '@/components/Service';
import { DButton, DCancelButton } from '@/components/Core';
import { AuthContext } from '@/contexts';
import { cancelAppointment } from '@/api';
import './AppointmentDetail.css';

export default function AppointmentDetail() {
  const { appointmentId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const { appointment } = useAppointmentDetail({ appointmentId });

  const handleUpdate = (appointmentId) => {
    navigate(`/update-appointment/${appointmentId}`);
  };

  const openDeleteModal = () => {
    setIsDeleting(true);
  };

  const hideDeleteModal = () => {
    setIsDeleting(false);
  };

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

  return (
    <div className="appointment-detail-container">
      <Link className="navigate-back" to="/my-appointments">
        {'<<< Mis citas'}
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
                <DButton
                  label="Actualizar"
                  onClick={() => handleUpdate(appointment._id)}
                />
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
    </div>
  );
}
