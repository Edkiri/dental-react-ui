import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

import useLocalStorage from '../hooks/useLocalStorage';

function useAuth() {
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

export function AuthProvider({ children }) {
  const { user, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
