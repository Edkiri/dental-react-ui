import { useContext, useState } from 'react';

import { AuthContext } from '@/contexts';
import { getPatientAppointments } from '@/api';

export default function useAppointments() {
  const [appointments, setAppointments] = useState([]);
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAll = async () => {
    try {
      setLoading(true);
      const appointments = await getPatientAppointments({
        token: user.token,
      });
      setLoading(false);
      setAppointments(appointments);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return { loading, error, appointments, getAll };
}
