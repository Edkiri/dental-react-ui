import React, { useContext, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import { ServiceContext } from '@/contexts';
import { ServiceIcon } from '..';
import './ServiceSelector.css';
import useOnClickOutside from '@/hooks/useOnClickOutside';

export default function ServiceSelector({
  selectedService,
  setSelectedService,
}) {
  const [dropDown, setDropDown] = useState(false);
  const { services } = useContext(ServiceContext);

  const selectService = (service) => {
    setSelectedService(service);
    setDropDown(false);
  };

  const hideList = () => {
    setDropDown(false);
  };
  const serviceListRef = useRef(null);
  useOnClickOutside(serviceListRef, hideList);

  return (
    <div className="service-selector-component">
      <button
        className="service-dropdown"
        onClick={() => setDropDown(!dropDown)}
      >
        {selectedService ? (
          <div className="service-item">
            <ServiceIcon category={selectedService.category} />
            <p>{selectedService.name}</p>
          </div>
        ) : (
          <div className="empty-service">Selecciona un servicio</div>
        )}
        <FaAngleDown className={`dropdown-icon ${dropDown && 'active'}`} />
      </button>
      {dropDown && (
        <ul className="service-list" ref={serviceListRef}>
          {services.length &&
            services.map((service) => (
              <li key={service._id} className="service-item">
                <button
                  className="service-selector"
                  onClick={() => selectService(service)}
                >
                  <ServiceIcon category={service.category} />
                  <p>{service.name}</p>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
