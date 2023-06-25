import Dentist from '../../../assets/dentista.png';
import ToothCare from '../../../assets/cuidado-dental.png';
import Implant from '../../../assets/implante.png';
import Surgery from '../../../assets/cirugia-cosmetica.png';

import './ServiceIcon.css';

export function ServiceIcon({ category }) {
  let imgUrl;
  if (category === 'cleaning') imgUrl = Dentist;
  if (category === 'consultation') imgUrl = ToothCare;
  if (category === 'aesthetic') imgUrl = Implant;
  if (category === 'surgery') imgUrl = Surgery;

  return (
    <img
      className="service-icon"
      src={imgUrl}
      alt={`Imagen de ${category}`}
    />
  );
}
