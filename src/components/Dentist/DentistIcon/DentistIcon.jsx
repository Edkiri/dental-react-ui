import './DentistIcon.css';
import HectorImg from '../../../../assets/hector.jpeg';
import MatiImg from '../../../../assets/mati.jpeg';
import DaniImg from '../../../../assets/dani.jpeg';
import DefaultImg from '../../../../assets/default-profile-pic.webp';

export function DentistIcon({ dentistFirstName }) {
  let imgUrl = DefaultImg;
  if (dentistFirstName === 'Héctor') imgUrl = HectorImg;
  if (dentistFirstName === 'Matilde') imgUrl = MatiImg;
  if (dentistFirstName === 'Daniel') imgUrl = DaniImg;

  return (
    <img
      className="service-icon"
      src={imgUrl}
      alt={`Imagen de perfil del dentista`}
    />
  );
}
