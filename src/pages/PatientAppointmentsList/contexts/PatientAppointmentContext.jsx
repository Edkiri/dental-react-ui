import { createContext } from 'react';

import usePatientAppointments from './usePatientAppointments';

const PatientAppointmentsContext = createContext({});

export function PatientAppointmentsProvider({ children }) {
  const { loading, error, appointments, getOne, getAll } =
    usePatientAppointments();
  return (
    <PatientAppointmentsContext.Provider
      value={{ loading, error, appointments, getOne, getAll }}
    >
      {children}
    </PatientAppointmentsContext.Provider>
  );
}

export default PatientAppointmentsContext;
