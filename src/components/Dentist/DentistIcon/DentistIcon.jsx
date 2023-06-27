import './DentistIcon.css';
import HectorImg from '../../../../assets/hector.jpeg';
import MatiImg from '../../../../assets/mati.jpeg';
import DaniImg from '../../../../assets/dani.jpeg';

export function DentistIcon({ dentistId }) {
  let imgUrl;
  if (dentistId === '649abe9787fdb58569abee1e') imgUrl = HectorImg;
  if (dentistId === '649abe9787fdb58569abee24') imgUrl = MatiImg;
  if (dentistId === '649abe9787fdb58569abee21') imgUrl = DaniImg;

  return (
    <img
      className="service-icon"
      src={imgUrl}
      alt={`Imagen de perfil del dentista`}
    />
  );
}
