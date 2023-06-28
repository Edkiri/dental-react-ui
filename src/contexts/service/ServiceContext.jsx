import { createContext } from 'react';

import useService from './useService';

const ServiceContext = createContext({});

export function ServiceProvider({ children }) {
  const { services, loading, error } = useService();
  return (
    <ServiceContext.Provider value={{ services, loading, error }}>
      {children}
    </ServiceContext.Provider>
  );
}

export default ServiceContext;
