import { useContext } from 'react';
import AuthContext from '../../../auth/AuthContext';

export default function ProfileData({ setIsUpdating }) {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile-data-container">
      <div className="data-container">
        <h5>Nombre</h5>
        <p>{user.profile.firstName}</p>
      </div>
      <div className="data-container">
        <h5>Apellidos</h5>
        <p>{user.profile.lastName}</p>
      </div>
      <div className="data-container">
        <h5>Teléfono</h5>
        <p>{user.profile.phoneNumber}</p>
      </div>
      <div className="data-container">
        <h5>Enlace de imágen de perfil</h5>
        <p>{user.profile.pictureUrl}</p>
      </div>
      <button onClick={() => setIsUpdating(true)}>Editar</button>
    </div>
  );
}
