import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useInputValue from '../../hooks/useInputValue';
import AuthContext from '../../auth/AuthContext';
import userApi from '../../api/index';
import DForm from '../../components/DForm/DForm';
import DInput from '../../components/DInput/Dinput';

export default function Login() {
  const emailInput = useInputValue('');
  const passwordInput = useInputValue('');

  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    const { value: email } = emailInput;
    const { value: password } = passwordInput;
    if (!email || !password) return;

    setLoading(true);
    try {
      const user = await userApi.login({ email, password });
      login(user);
      navigate('/');
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <main>
      <DForm
        btnLabel={'Iniciar sesión'}
        loading={loading}
        onSubmit={handleSubmit}
      >
        <DInput
          id="email"
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
        {error}
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
