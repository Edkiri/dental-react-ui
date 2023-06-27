import { useState } from 'react';

import { DForm, DFormInput, DFormTextarea } from '@/components/core';
import useInputForm from '@/hooks/useInputForm';
import { formatDate } from '@/utils/utils';
import { DentistIcon } from '@/components/DentistIcon/DentistIcon';
import useDentists from '@/hooks/useDentits';
import './NewAppointment.css';

export default function NewAppointment() {
  const currentDate = formatDate(new Date());
  const date = useInputForm(currentDate);
  const reason = useInputForm();
  const { dentists } = useDentists();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    return;
  };

  return (
    <div className="new-appointment-container">
      <DForm btnLabel="Solicitar" title="Nueva cita" onSubmit={handleSubmit}>
        <p>¡Completa el formulario y programa tu cita!</p>

        <DFormInput label="Fecha" type="date" {...date} />
        
        <DFormTextarea label="Cuéntanos qué necesitas" {...reason} />

        {dentists.length &&
          dentists.map((dentist) => (
            <DentistIcon key={dentist._id} dentistId={dentist._id} />
          ))}
      </DForm>
    </div>
  );
}
