import { createContext } from 'react';
import { useEffect, useState } from 'react';

const AuthContext = createContext({});

import useLocalStorage from '../hooks/useLocalStorage';

function useAuth() {
  const { storedValue, setLocalStorage } = useLocalStorage('user');
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(storedValue);
  }, [storedValue]);

  const login = (userData) => {
    setLocalStorage(userData);
  };

  const logout = () => {
    setLocalStorage(null);
  };

  return { user, login, logout };
}

export function AuthProvider({children}) {
  const { user, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;