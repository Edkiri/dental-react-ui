import { useRef, useState } from 'react';

import useOnClickOutside from '@/hooks/useOnClickOutside';
import { DForm } from '@/components/Core';
import { DentistSelector } from '@/components/Dentist';
import { ServiceSelector } from '@/components/Service';
import './AppointmentConfirmModal.css';

export default function AppointmentConfirmModal({
  onSubmit,
  hide,
  appointment,
}) {
  const [time, setTime] = useState('9:00');

  const confirmModalRef = useRef();
  useOnClickOutside(confirmModalRef, hide);

  const [selectedDentist, setSelectedDentist] = useState(() => {
    return appointment.dentist;
  });

  const [selectedService, setSelectedService] = useState(() => {
    return appointment.service;
  });

  const handleSubmit = async () => {
    if (!time) return;
    onSubmit({
      time,
      dentistId: selectedDentist._id,
      serviceId: selectedService._id,
    });
    hide();
  };

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <>
      <div className="confirm-modal-container"></div>
      <div className="confirm-modal" ref={confirmModalRef}>
        <DForm
          onSubmit={handleSubmit}
          btnLabel="Confirmar cita"
          title="Hora de la cita"
        >
          <select value={time} onChange={handleChange} name="time" id="time">
            <option value="9:00">9:00</option>
            <option value="9:30">9:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
          </select>
          <DentistSelector
            setSelectedDentist={setSelectedDentist}
            selectedDentist={selectedDentist}
          />
          <ServiceSelector
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </DForm>
      </div>
    </>
  );
}
