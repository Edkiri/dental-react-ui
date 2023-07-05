import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppointmentDetail } from '@/contexts/appointments/hooks';
import useInputForm from '@/hooks/useInputForm';
import { getTomorrowDate } from '@/utils/utils';
import validators from '@/utils/validators';
import { DForm, DFormInput, DFormTextarea } from '@/components/Core';
import { DentistSelector } from '@/components/Dentist';
import { ServiceSelector } from '@/components/Service';
import { AppointmentsContext, AuthContext } from '@/contexts';
import { updateAppointment } from '@/api';
import './AppointmentUpdate.css';

export default function AppointmentUpdate() {
  const { appointmentId } = useParams();
  const { getAll } = useContext(AppointmentsContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { appointment } = useAppointmentDetail({ appointmentId });
  const [selectDentists, setSelectDentist] = useState(
    Boolean(appointment?.dentist),
  );
  const [selectedDentist, setSelectedDentist] = useState(appointment?.dentist);

  useEffect(() => {
    if (!appointment) {
      navigate('/my-appointments');
    }
  }, []);

  const tomorrow = getTomorrowDate();
  const date = useInputForm(tomorrow);

  const reason = useInputForm(appointment?.reason, validators.minTextLength);

  const [selectService, setSelectService] = useState(
    Boolean(appointment?.service),
  );
  const [selectedService, setSelectedService] = useState(appointment?.service);

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
      await updateAppointment({
        token: user.token,
        appointmentId,
        appointmentData,
      });
      await getAll();
      setLoading(false);
      navigate(`/appointment/${appointmentId}`);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  const handleDentistChange = (e) => {
    setSelectDentist(e.target.checked);
  };
  const handleServiceChange = (e) => {
    setSelectService(e.target.checked);
  };

  return (
    <div className="update-appointment-container">
      <DForm
        loading={loading}
        error={error}
        btnLabel="Actualizar"
        title="Actualizar cita"
        onSubmit={handleSubmit}
      >
        <div className="select-dentists-question">
          <span>Elegir un dentista?</span>
          <input
            type="checkbox"
            value={selectDentists}
            onClick={handleDentistChange}
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
            onClick={handleServiceChange}
          />
        </div>

        {selectService && (
          <ServiceSelector
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        )}

        <DFormInput label="Fecha" type="date" min={tomorrow} {...date} />

        <DFormTextarea label="Cuéntanos qué necesitas" {...reason} />
      </DForm>
    </div>
  );
}
