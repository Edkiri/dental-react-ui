import { formatDate } from '@/utils/utils';
import { AppointmentStatus } from '@/components/Appointment';
import { DButton } from '@/components/Core';
import './AppointmentCard.css';
import { useContext } from 'react';
import { AuthContext } from '@/contexts';

export default function AppointmentCard({ appointment, handleDetail }) {
  const { user } = useContext(AuthContext);
  const patientName = `${appointment.patient.profile.firstName} ${appointment.patient.profile.lastName}`;

  return (
    <div className="appointment-card" key={`appointment-${appointment._id}`}>
      <div className="appointment-card-info">
        <p className="appointment-card-date">
          <strong>Fecha: </strong>
          {formatDate(appointment.datetime)}
        </p>
        {user.roles.includes('dentist') && (
          <div className="appointment-card-patient">
            <strong>Paciente:</strong>
            <span>{patientName}</span>
          </div>
        )}
      </div>

      <div className="appointment-card-right">
        <AppointmentStatus status={appointment.status} />
      </div>
      <div className="appointment-card-control">
        <DButton label="Ver" onClick={() => handleDetail(appointment._id)} />
      </div>
    </div>
  );
}
