import { getAllServices } from '@/api';
import { useEffect, useState } from 'react';

export default function useService() {
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const services = await getAllServices();
        setServices(services);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error, services };
}
