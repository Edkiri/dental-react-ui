import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAppointmentDetail } from '@/contexts/appointments/hooks';
import { formatDate } from '@/utils/utils';
import { AppointmentStatus } from '@/components/Appointment';
import { DentistProfile } from '@/components/Dentist';
import { ServiceDetail } from '@/components/Service';
import { DButton } from '@/components/Core';
import './AppointmentDetail.css';

export default function AppointmentDetail() {
  const { appointmentId } = useParams();
  const navigate = useNavigate();

  const { appointment } = useAppointmentDetail({ appointmentId });

  const handleUpdate = (appointmentId) => {
    navigate(`/update-appointment/${appointmentId}`);
  };

  return (
    <div className="appointment-detail-container">
      <Link className="navigate-back" to="/my-appointments">{"<<< Mis citas"}</Link>
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
          <div className="appointment-detail-reason">
            <strong>Motivo:</strong>
            <span>{appointment.reason}</span>
          </div>
          {appointment.service && (
            <ServiceDetail
              service={appointment.service}
              price={appointment.price}
            />
          )}
          <div className="appointment-detail-control">
            {appointment.status === 'requested' && (
              <DButton
                label="Actualizar"
                onClick={() => handleUpdate(appointment._id)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
