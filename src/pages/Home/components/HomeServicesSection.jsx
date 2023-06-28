import { useContext } from 'react';

import { ServiceIcon } from '@/components/Service';
import { ServiceContext } from '@/contexts';
import './HomeServiceSection.css';

export default function HomeServiceSection() {
  const { services, loading, error } = useContext(ServiceContext);

  return (
    <section className="home-services-section">
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}

      {services.length &&
        services.map((service) => (
          <div className="service-card" key={`service-${service._id}`}>
            <ServiceIcon category={service.category} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
    </section>
  );
}
