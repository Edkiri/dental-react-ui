import { useContext, useState } from 'react';

import { AuthContext } from '@/contexts';
import { getDentistAppointments, getPatientAppointments } from '@/api';

export default function useAppointments() {
  const [appointments, setAppointments] = useState([]);
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAppointments = () => {
    if (user.roles.includes('dentist'))
      return getDentistAppointments({
        token: user.token,
      });
    if (user.roles.includes('user'))
      return getPatientAppointments({
        token: user.token,
      });
  };

  const getAll = async () => {
    try {
      setLoading(true);
      const appointments = await getAppointments();
      setLoading(false);
      setAppointments(appointments);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return { loading, error, appointments, getAll };
}
