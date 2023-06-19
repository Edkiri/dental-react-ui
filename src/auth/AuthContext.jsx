import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

import useLocalStorage from '../hooks/useLocalStorage';

function useAuth() {
  const { storedValue, setLocalStorage } = useLocalStorage('user');
  const navigate = useNavigate();

  const login = (userData) => {
    setLocalStorage(userData);
  };

  const logout = () => {
    setLocalStorage(null);
    navigate('/');
  };

  return { user: storedValue, login, logout };
}

export function AuthProvider({ children }) {
  const { user, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
