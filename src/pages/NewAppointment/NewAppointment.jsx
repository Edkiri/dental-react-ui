import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DForm, DFormInput, DFormTextarea } from '@/components/core';
import useInputForm from '@/hooks/useInputForm';
import { formatDate } from '@/utils/utils';
import { DentistSelector } from '@/components/Dentist';
import validators from '@/utils/validators';
import { requestAppointment } from '@/api';
import { AuthContext } from '@/contexts';
import { ServiceSelector } from '@/components/Service';
import './NewAppointment.css';

export default function NewAppointment() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const currentDate = formatDate(new Date());
  const date = useInputForm(currentDate);

  const reason = useInputForm('', validators.minTextLength);

  const [selectDentists, setSelectDentist] = useState(false);
  const [selectedDentist, setSelectedDentist] = useState(null);

  const [selectService, setSelectService] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (reason.error || reason.value.trim() === '') return;
    try {
      setLoading(true);
      const appointmentData = {
        reason: reason.value,
        datetime: new Date(date.value).toISOString(),
      };
      if (selectDentists && selectedDentist) {
        appointmentData.dentistId = selectedDentist._id;
      }
      if (selectService && selectedService) {
        appointmentData.serviceId = selectedService._id;
      }
      await requestAppointment({
        token: user.token,
        appointmentData,
      });
      setLoading(false);
      navigate('/');
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="new-appointment-container">
      <DForm
        loading={loading}
        error={error}
        btnLabel="Solicitar"
        title="Nueva cita"
        onSubmit={handleSubmit}
      >
        <p>¡Completa el formulario y programa tu cita!</p>

        <div className="select-dentists-question">
          <span>Elegir un dentista?</span>
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

        <div className="select-services-question">
          <span>Elegir un servicio?</span>
          <input
            type="checkbox"
            value={selectService}
            onChange={() => setSelectService(!selectService)}
          />
        </div>

        {selectService && (
          <ServiceSelector
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        )}

        <DFormInput label="Fecha" type="date" {...date} />

        <DFormTextarea label="Cuéntanos qué necesitas" {...reason} />
      </DForm>
    </div>
  );
}
