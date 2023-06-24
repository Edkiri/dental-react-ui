import { Link } from 'react-router-dom';

export default function SignupSucess() {
  return (
    <main className='signup-success-container'>
      <h2>Tu cuenta ha sido creada exitosamente!</h2>
      <div>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}
