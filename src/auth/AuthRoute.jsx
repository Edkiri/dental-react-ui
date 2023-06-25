import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import AuthContext from './AuthContext';

export default function AuthRoute({ children }) {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  if (!user.onBoarded)
    return <Navigate to="/profile" state={{ from: location }} replace />;

  return <>{children}</>;
}
