import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/contexts';
import { getPatientAppointments } from '@/api';

export default function usePatientAppointment() {
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

  const getOne = (appointmentId) => {
    return appointments.find(
      (appointment) => (appointment._id = appointmentId),
    );
  };

  return { loading, error, appointments, getAll, getOne };
}
