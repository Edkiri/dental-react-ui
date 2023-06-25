import { useContext, useState } from 'react';

import AuthContext from '@/auth/AuthContext';
import useInputForm from '@/hooks/useInputForm';
import userApi from '@/api';
import { DForm } from '@/components/core';

export default function ProfileForm({ setIsUpdating }) {
  const { user, login } = useContext(AuthContext);

  const firstNameInput = useInputForm(user.profile?.firstName);
  const lastNameInput = useInputForm(user.profile?.lastName);
  const phoneNumberInput = useInputForm(user.profile?.phoneNumber);
  const imgUrlInput = useInputForm(user.profile?.pictureUrl);

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
    ></DForm>
  );
}
