import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useInputValue from '@/hooks/useInputValue';
import userApi from '@/api/index';

import DForm from '@/components/DForm/DForm';
import DInput from '@/components/DInput/Dinput';
import SignupSucess from './SignupSuccess';

export default function Signup() {
  const [accountCreated, setAcountCreated] = useState(false);
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
      setAcountCreated(true);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  if (accountCreated) return <SignupSucess />;
  return (
    <main>
      <DForm
        btnLabel={'Crear una cuenta'}
        onSubmit={handleSubmit}
        loading={loading}
      >
        <DInput
          id="name"
          name="email"
          label="Dirección de correo"
          {...emailInput}
        />
        <DInput
          id="password"
          name="password"
          label="Contraseña"
          type="password"
          {...passwordInput}
        />
        <DInput
          id="rePassword"
          name="rePassword"
          label="Reingresa la contraseña"
          type="password"
          {...rePasswordInput}
        />
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
