import { useParams } from 'react-router-dom';

import { useAppointmentDetail } from '@/contexts/appointments/hooks';
import { formatDate } from '@/utils/utils';
import { AppointmentStatus } from '@/components/Appointment';
import { DentistProfile } from '@/components/Dentist';
import { ServiceDetail } from '@/components/Service';
import './AppointmentDetail.css';

export default function AppointmentDetail() {
  const { appointmentId } = useParams();

  const { appointment } = useAppointmentDetail({ appointmentId });

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
            <ServiceDetail service={appointment.service} price={appointment.price} />
          )}
        </>
      )}
    </div>
  );
}
