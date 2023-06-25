import Dentist from '../../../assets/dentista.png';
import ToothCare from '../../../assets/cuidado-dental.png';
import Implant from '../../../assets/implante.png';
import Surgery from '../../../assets/cirugia-cosmetica.png';

import './ServiceIcon.css';

export function ServiceIcon({ serviceName }) {
  let imgUrl;
  if (serviceName === 'Examen oral y diagnóstico') imgUrl = Dentist;
  if (serviceName === 'Cuidado dental') imgUrl = ToothCare;
  if (serviceName === 'Coronas') imgUrl = Implant;
  if (serviceName === 'Implantes') imgUrl = Surgery;

  return (
    <img
      className="service-icon"
      src={imgUrl}
      alt={`Imagen de ${serviceName}`}
    />
  );
}
