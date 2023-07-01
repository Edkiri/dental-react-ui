import { useContext, useEffect, useState } from 'react';

import { getAppointment } from '@/api';
import { AuthContext, AppointmentsContext } from '@/contexts';

export default function useAppointmentDetail({ appointmentId }) {
  const { appointments } = useContext(AppointmentsContext);
  const { user } = useContext(AuthContext);

  const [appointment, setAppointment] = useState(() => {
    return appointments.find(
      (appointment) => appointment._id === appointmentId,
    );
  });

  useEffect(() => {
    if (!appointment) {
      (async () => {
        try {
          const data = await getAppointment({
            token: user.token,
            appointmentId,
          });
          setAppointment(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  return { appointment };
}
