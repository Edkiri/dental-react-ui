import { useContext, useState } from 'react';

import { AuthContext } from '@/contexts';
import useInputForm from '@/hooks/useInputForm';
import { updateProfile } from '@/api';
import { DForm, DFormInput } from '@/components/core';
import validators from '@/utils/validators';

export default function ProfileForm({ setIsUpdating }) {
  const { user, login } = useContext(AuthContext);

  const firstName = useInputForm(user.profile?.firstName, validators.name);
  const lastName = useInputForm(user.profile?.lastName, validators.name);
  const phoneNumber = useInputForm(
    user.profile?.phoneNumber,
    validators.spainPhoneNumber,
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const profileData = {
        firstName: firstName.value,
        lastName: lastName.value,
        phoneNumber: phoneNumber.value,
      };
      const userUpdated = await updateProfile(user.token, profileData);
      login(userUpdated);
      setIsUpdating(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <DForm
      title="Perfil"
      btnLabel="Actualizar"
      loading={loading}
      onSubmit={handleSubmit}
      error={error}
    >
      <DFormInput id="firstName" label="Nombre" {...firstName} />
      <DFormInput id="lastName" label="Apellidos" {...lastName} />
      <DFormInput
        id="phoneNumber"
        label="Teléfono"
        inputMode="tel"
        {...phoneNumber}
      />
    </DForm>
  );
}
