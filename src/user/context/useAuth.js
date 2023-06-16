import { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function useAuth() {
  const { storedValue, setLocalStorage } = useLocalStorage('user', null);
  const [user, setUser] = useState(storedValue);

  const login = (userData) => {
    setLocalStorage(userData);
  };

  const logout = () => {
    setLocalStorage(null);
    console.log(storedValue);
  };

  useEffect(() => {
    setUser(storedValue);
  }, [storedValue]);

  return { user, login, logout };
}