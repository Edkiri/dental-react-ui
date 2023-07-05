import { useContext, useEffect, useState } from 'react';

import { getAppointment } from '@/api';
import { AuthContext } from '@/contexts';

export default function useAppointmentDetail({ appointmentId }) {
  const { user } = useContext(AuthContext);
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
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
  }, []);

  return { appointment };
}
