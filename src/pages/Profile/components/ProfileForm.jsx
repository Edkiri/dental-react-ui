import { useContext, useState } from 'react';

import AuthContext from '@/auth/AuthContext';
import useInputValue from '@/hooks/useInputValue';
import userApi from '@/api';
import DForm from '@/components/DForm/DForm';
import DInput from '@/components/DInput/Dinput';

export default function ProfileForm({ setIsUpdating }) {
  const { user, login } = useContext(AuthContext);

  const firstNameInput = useInputValue(user.profile?.firstName);
  const lastNameInput = useInputValue(user.profile?.lastName);
  const phoneNumberInput = useInputValue(user.profile?.phoneNumber);
  const imgUrlInput = useInputValue(user.profile?.pictureUrl);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const { value: firstName } = firstNameInput;
    const { value: lastName } = lastNameInput;
    const { value: phoneNumber } = phoneNumberInput;
    const { value: imgUrl } = imgUrlInput;
    // TODO: Validate data
    // TODO: Refactor all this..
    try {
      const profileData = {
        firstName,
        lastName,
        phoneNumber,
        pictureUrl: imgUrl || '',
      };
      const userUpdated = await userApi.updateProfile(user.token, profileData);
      login(userUpdated);
      setIsUpdating(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <DForm
      btnLabel={'Actualizar perfil'}
      loading={loading}
      onSubmit={handleSubmit}
    >
      <DInput
        id="firstName"
        name="firstName"
        label="Nombre"
        {...firstNameInput}
      />
      <DInput
        id="lastName"
        name="lastName"
        label="Apellidos"
        {...lastNameInput}
      />
      <DInput
        id="phoneNumber"
        name="phoneNumber"
        label="Teléfono"
        {...phoneNumberInput}
      />
      {error}
    </DForm>
  );
}
