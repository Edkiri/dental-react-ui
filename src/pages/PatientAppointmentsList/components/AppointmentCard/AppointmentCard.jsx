import { formatDate } from '@/utils/utils';
import { AppointmentStatus } from '@/components/Appointment';
import { DButton } from '@/components/Core';
import './AppointmentCard.css';

export default function AppointmentCard({ appointment, handleDetail }) {
  return (
    <div className="appointment-card" key={`appointment-${appointment._id}`}>
      <p className="appointment-card-date">
        <strong>Fecha: </strong>
        {formatDate(appointment.datetime)}
      </p>
      <div className="appointment-card-right">
        <AppointmentStatus status={appointment.status} />
        <DButton label="Ver" onClick={() => handleDetail(appointment._id)} />
      </div>
    </div>
  );
}
