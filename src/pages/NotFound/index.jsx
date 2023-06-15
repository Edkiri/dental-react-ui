import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <main>
        <h2>Not Found</h2>
        <Link to="/">GO HOME</Link>
      </main>
    </>
  );
}

export default NotFound;
