import useInputValue from '../../hooks/useInputValue';

import './Signup.css';

export default function Signup() {
  const emailInput = useInputValue('');
  const passwordInput = useInputValue('');

  return (
    <main>
      <form className="signup-form">
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
        <button type='submit'>Crear una cuenta</button>
      </form>
    </main>
  );
}
