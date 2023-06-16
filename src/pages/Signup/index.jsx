import { useState } from 'react';
import { Link } from 'react-router-dom';

import useInputValue from '../../hooks/useInputValue';
import { useNavigate } from 'react-router-dom';
import userApi from '../../api/index';

import './Signup.css';

export default function Signup() {
  const emailInput = useInputValue('');
  const passwordInput = useInputValue('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navidate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { value: email } = emailInput;
    const { value: password } = passwordInput;
    if (!email || !password) return;
    setError(false);
    try {
      setLoading(true);
      await userApi.signup({ email, password });
      setLoading(false);
      if (data.success) navidate('/account-created');
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <main>
      <form className="signup-form" onSubmit={handleSubmit}>
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
        <button disabled={loading} type="submit">
          Crear una cuenta
        </button>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
        {error}
      </form>
    </main>
  );
}
