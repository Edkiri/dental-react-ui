import { useEffect, useState } from 'react';

import { getAll } from '../../../api/service-api';

export default function HomeServiceSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setError(false);
      setLoading(true);
      try {
        const { data } = await getAll();
        setServices(data.data.services);
        setLoading(false);
      } catch (err) {
        setError(err.response.data.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="home-services-section">
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}

      {services.length &&
        services.map((service) => (
          <div className="service-card" key={`service-${service._id}`}>
            <h5>{service.name}</h5>
            <p>{service.description}</p>
          </div>
        ))}
    </section>
  );
}
