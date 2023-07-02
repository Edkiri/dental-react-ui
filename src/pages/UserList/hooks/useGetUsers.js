import { useEffect, useState, useContext } from 'react';

import { getUsers } from '@/api';
import { AuthContext } from '@/contexts';

export default function useGetUsers() {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const users = await getUsers({ token: user.token });
        setUsers(users);
        setLoading(false);
      } catch (err) {
        setError(err.response.data.message);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error, users };
}
