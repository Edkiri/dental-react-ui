import { createContext } from 'react';

import { useAppointments } from './hooks';

const AppointmentsContext = createContext({});

export function AppointmentsProvider({ children }) {
  const { loading, error, appointments, getAll } = useAppointments();
  return (
    <AppointmentsContext.Provider
      value={{ loading, error, appointments, getAll }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}

export default AppointmentsContext;
