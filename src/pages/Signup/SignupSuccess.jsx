import { Link } from 'react-router-dom';

export default function SignupSucess() {
  return (
    <main>
      <h3>Tu cuenta ha sido creada exitosamente!</h3>
      <div>
        <Link to="/">GO HOME</Link>
      </div>
    </main>
  );
}
