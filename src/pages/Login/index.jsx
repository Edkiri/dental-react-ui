import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInputValue from '../../hooks/useInputValue';
import AuthContext from '../../user/context/AuthContext';
import userApi from '../../api/index';

export default function Login() {
  const { login } = useContext(AuthContext);
  const emailInput = useInputValue('');
  const passwordInput = useInputValue('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { value: email } = emailInput;
    const { value: password } = passwordInput;
    if (!email || !password) return;
    setError(false);
    try {
      setLoading(true);
      const user = await userApi.login({ email, password });
      setLoading(false);
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
