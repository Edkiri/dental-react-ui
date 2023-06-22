import { createContext } from 'react';

import { useAuth } from './useAuth';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const { user, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
