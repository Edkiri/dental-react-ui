import { useContext } from 'react';

import { formatDate, formatTimeString } from '@/utils/utils';
import { AppointmentStatus } from '@/components/Appointment';
import { DButton } from '@/components/Core';
import { AuthContext } from '@/contexts';
import './AppointmentCard.css';

export default function AppointmentCard({ appointment, handleDetail }) {
  const { user } = useContext(AuthContext);
  const patientName = `${appointment.patient.profile.firstName} ${appointment.patient.profile.lastName}`;
  const doctorName = `${appointment.dentist?.profile.firstName} ${appointment.dentist?.profile.lastName}`

  const isAppointmentdetailed =
    user.roles.includes('dentist') || user.roles.includes('admin');

  return (
    <div className="appointment-card" key={`appointment-${appointment._id}`}>
      <div className="appointment-card-info">
        <p className="appointment-card-date">
          <strong>Fecha: </strong>
          {formatDate(appointment.datetime)}
        </p>
        <p className="appointment-card-date">
          <strong>Hora: </strong>
          {formatTimeString(appointment.datetime)}
        </p>
        {isAppointmentdetailed && (
          <>
            <div className="appointment-card-patient">
              <strong>Paciente:</strong>
              <span>{patientName}</span>
            </div>
            {appointment.dentist && (
              <div className="appointment-card-dentist">
                <strong>Dentista:</strong>
                <span>{doctorName}</span>
              </div>
            )}
          </>
        )}
        <div className="appointment-card-right">
          <AppointmentStatus status={appointment.status} />
        </div>
      </div>

      <div className="appointment-card-control">
        <DButton label="Ver" onClick={() => handleDetail(appointment._id)} />
      </div>
    </div>
  );
}
