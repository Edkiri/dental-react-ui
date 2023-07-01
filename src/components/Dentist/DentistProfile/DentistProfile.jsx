import { DentistIcon } from '../DentistIcon/DentistIcon';
import './DentistProfile.css';

export default function DentistProfile({ dentist }) {
  return (
    <div className="dentist-profile-container">
      <div className="dentist-profile-info">
        <div className="dentist-profile-name">
          <strong>Dentista:</strong>
          <span>
            {dentist.profile.firstName} {dentist.profile.lastName}
          </span>
        </div>
        <div className="dentist-profile-specialization">
          <strong>Especialización:</strong>
          <span>{dentist.dentistProfile.specialization}</span>
        </div>
      </div>
      <DentistIcon dentistId={dentist._id} />
    </div>
  );
}
