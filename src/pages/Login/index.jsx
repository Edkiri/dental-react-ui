import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInputValue from '../../hooks/useInputValue';
import AuthContext from '../../auth/AuthContext';
import userApi from '../../api/index';

export default function Login() {
  const emailInput = useInputValue('');
  const passwordInput = useInputValue('');

  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const { value: email } = emailInput;
    const { value: password } = passwordInput;
    if (!email || !password) return;

    try {
      setLoading(true);
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
          Iniciar sesión
        </button>
        {error}
      </form>
    </main>
  );
}
