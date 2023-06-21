import { useContext, useState } from 'react';

import AuthContext from '../../../auth/AuthContext';
import useInputValue from '../../../hooks/useInputValue';
import userApi from '../../../api';
import DForm from '../../../components/DForm/DForm';

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
      <label htmlFor="firstName">
        Nombre
        <input
          id="firstName"
          type="text"
          placeholder="Eduardo"
          name="firstName"
          {...firstNameInput}
        />
      </label>
      <label htmlFor="lastName">
        Apellidos
        <input
          id="lastName"
          type="text"
          placeholder="Kiriakos Piazza"
          name="lastName"
          {...lastNameInput}
        />
      </label>
      <label htmlFor="phoneNumber">
        Teléfono
        <input
          id="phoneNumber"
          type="text"
          placeholder="6577778888"
          name="phoneNumber"
          {...phoneNumberInput}
        />
      </label>
      {error}
    </DForm>
  );
}
