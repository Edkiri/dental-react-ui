import { useNavigate } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';

export function useAuth() {
  const { storedValue: user, setLocalStorage: setUser } =
    useLocalStorage('user');

  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return { user, login, logout };
}
