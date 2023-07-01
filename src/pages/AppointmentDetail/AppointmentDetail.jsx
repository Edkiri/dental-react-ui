import { useNavigate, useParams } from 'react-router-dom';

import { useAppointmentDetail } from '@/contexts/appointments/hooks';
import { formatDate } from '@/utils/utils';
import { AppointmentStatus } from '@/components/Appointment';
import { DentistProfile } from '@/components/Dentist';
import { ServiceDetail } from '@/components/Service';
import './AppointmentDetail.css';
import { DButton } from '@/components/Core';

export default function AppointmentDetail() {
  const { appointmentId } = useParams();
  const navigate = useNavigate();

  const { appointment } = useAppointmentDetail({ appointmentId });

  const handleUpdate = () => {
    navigate(`/update-appointment/${appointment.id}`);
  };

  return (
    <div className="appointment-detail-container">
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
          <div className="appointment-detail-control">
            {appointment.status === 'requested' && (
              <DButton label="Actualizar" onClick={handleUpdate} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
