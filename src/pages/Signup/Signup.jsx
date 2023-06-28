import { useState } from 'react';
import { Link } from 'react-router-dom';

import useInputForm from '@/hooks/useInputForm';
import { DFormInput, DForm } from '@/components/Core';
import validators from '@/utils/validators';
import SignupSucess from './SignupSuccess';
import { signup } from '@/api';

import './Signup.css';

export default function Signup() {
  const [accountCreated, setAcountCreated] = useState(false);
  const email = useInputForm('', validators.email);
  const password = useInputForm('', validators.password);
  const confirmPassword = useInputForm('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (email.error || email.value.trim() === '') return;
    if (password.error || password.value.trim() === '') return;
    if (password.value !== confirmPassword.value) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');

    try {
      setLoading(true);
      await signup({ email: email.value, password: password.value });
      setAcountCreated(true);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  if (accountCreated) return <SignupSucess />;
  return (
    <main className="signup-container">
      <DForm
        btnLabel="Crear cuenta"
        title="Registro"
        error={error}
        loading={loading}
        onSubmit={handleSubmit}
      >
        <DFormInput id="email" label="Dirección de correo" {...email} />
        <DFormInput
          id="password"
          type="password"
          label="Contraseña"
          {...password}
        />
        <DFormInput
          id="confirmPassword"
          type="password"
          label="Reingresa la contraseña"
          {...confirmPassword}
        />
        <p>
          ¿Ya tienes una cuenta?{' '}
          <Link className="link" to="/login">
            Inicia sesión
          </Link>
        </p>
      </DForm>
    </main>
  );
}
