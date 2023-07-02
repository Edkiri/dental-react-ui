import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '@/contexts';

export default function DentistRoute({ children }) {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  if (!user.roles.includes('dentist')) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}
