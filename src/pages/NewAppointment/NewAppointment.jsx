import { useState } from 'react';

import { DForm, DFormInput, DFormTextarea } from '@/components/core';
import useInputForm from '@/hooks/useInputForm';
import { formatDate } from '@/utils/utils';
import { DentistSelector } from '@/components/Dentist';
import './NewAppointment.css';

export default function NewAppointment() {
  const currentDate = formatDate(new Date());
  const date = useInputForm(currentDate);

  const reason = useInputForm();

  const [selectDentists, setSelectDentist] = useState(false);
  const [selectedDentist, setSelectedDentist] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    return;
  };

  return (
    <div className="new-appointment-container">
      <DForm btnLabel="Solicitar" title="Nueva cita" onSubmit={handleSubmit}>
        <p>¡Completa el formulario y programa tu cita!</p>

        <DFormInput label="Fecha" type="date" {...date} />

        <DFormTextarea label="Cuéntanos qué necesitas" {...reason} />

        <div className="select-dentists-question">
          <span>Quieres seleccionar un dentista?</span>
          <input
            type="checkbox"
            value={selectDentists}
            onChange={() => setSelectDentist(!selectDentists)}
          />
        </div>

        {selectDentists && (
          <DentistSelector
            setSelectedDentist={setSelectedDentist}
            selectedDentist={selectedDentist}
          />
        )}
      </DForm>
    </div>
  );
}
