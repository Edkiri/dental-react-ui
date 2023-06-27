import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useInputForm from '@/hooks/useInputForm';
import validators from '@/utils/validators';
import { DForm, DFormInput } from '@/components/core';
import AuthContext from '@/auth/AuthContext';
import { login as apiLogin } from '@/api';
import './Login.css';

export default function Login() {
  const email = useInputForm('', validators.email);
  const password = useInputForm('', validators.password);

  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    setLoading(true);

    try {
      const user = await apiLogin({
        email: email.value,
        password: password.value,
      });
      login(user);
      navigate('/');
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <main className="login-container">
      <DForm
        btnLabel="Iniciar"
        title="Inicio de sesión"
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
        <p>
          ¿Aún no tienes una cuenta?{' '}
          <Link className="link" to="/signup">
            Crea una cuenta
          </Link>
        </p>
      </DForm>
    </main>
  );
}
