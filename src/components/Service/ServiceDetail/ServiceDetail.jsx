import { ServiceIcon } from '..';
import './ServiceDetail.css';

export default function ServiceDetail({ service, price }) {
  return (
    <div className="service-detail-container">
      <div className="service-detail-info">
        <div className="service-detail-name">
          <strong>Servicio:</strong>
          <span>{service.name}</span>
        </div>
        <div className="service-detail-price">
          <strong>Precio:</strong>
          <span>{price}$</span>
        </div>
        <div className="service-detail-duration">
          <strong>Tiempo aproximado:</strong>
          <span>{service.duration} minutos</span>
        </div>
      </div>
      <ServiceIcon category={service.category} />
    </div>
  );
}
