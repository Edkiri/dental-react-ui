import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useInputValue from '../../hooks/useInputValue';
import userApi from '../../api/index';
import DFilledButton from '../../components/DFilledButton';

import './Signup.css';
import DForm from '../../components/DForm/DForm';

export default function Signup() {
  const emailInput = useInputValue('');
  const passwordInput = useInputValue('');
  const rePasswordInput = useInputValue('');

  const navidate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const { value: email } = emailInput;
    const { value: password } = passwordInput;
    if (!email || !password) return;
    setError(false);

    try {
      setLoading(true);
      await userApi.signup({ email, password });
      navidate('/account-created');
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <main>
      <DForm
        btnLabel={'Crear una cuenta'}
        onSubmit={handleSubmit}
        loading={loading}
      >
        <label htmlFor="email">
          Correo
          <input
            id="email"
            type="text"
            placeholder="mail@mail.com"
            name="email"
            {...emailInput}
          />
        </label>
        <label htmlFor="password">
          Contraseña
          <input
            id="password"
            type="password"
            placeholder="********"
            name="password"
            {...passwordInput}
          />
        </label>
        <label htmlFor="password">
          Reingresa la contraseña
          <input
            id="rePassword"
            type="password"
            placeholder="********"
            name="rePassword"
            {...rePasswordInput}
          />
        </label>
        <p>
          ¿Ya tienes una cuenta?{' '}
          <Link className="link" to="/login">
            Inicia sesión
          </Link>
        </p>
        {error}
      </DForm>
    </main>
  );
}
