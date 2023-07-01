import { useParams } from 'react-router-dom';

import { useAppointmentDetail } from '@/contexts/appointments/hooks';
import './AppointmentDetail.css';

export default function AppointmentDetail() {
  const { appointmentId } = useParams();

  const { appointment } = useAppointmentDetail({ appointmentId });

  console.log(appointment);

  return <div className="appointment-detail-container"></div>;
}
