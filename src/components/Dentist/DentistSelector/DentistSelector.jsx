import { useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import useDentists from '@/hooks/useDentits';
import { DentistIcon } from '../DentistIcon/DentistIcon';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import './DentistSelector.css';

export default function DentistSelector({
  setSelectedDentist,
  selectedDentist,
}) {
  const [dropDown, setDropDown] = useState(false);
  const { dentists } = useDentists();

  const hideList = () => {
    setDropDown(false);
  };
  const dentistListRef = useRef(null);
  useOnClickOutside(dentistListRef, hideList);

  const selectDentist = (dentist) => {
    setSelectedDentist(dentist);
    setDropDown(false);
  };

  return (
    <>
      <div className="dentist-selector-component">
        <button
          className="dentist-dropdown"
          type="button"
          onClick={() => setDropDown(!dropDown)}
        >
          {selectedDentist ? (
            <div className="dentist-item">
              <DentistIcon dentistFirstName={selectedDentist.profile.firstName} />
              <p>
                {selectedDentist.profile.firstName}{' '}
                {selectedDentist.profile.lastName}
              </p>
            </div>
          ) : (
            <div className="empty-dentist">Selecciona un dentista</div>
          )}
          <FaAngleDown className={`dropdown-icon ${dropDown && 'active'}`} />
        </button>
        {dropDown && (
          <ul className="dentist-list" ref={dentistListRef}>
            {dentists.length &&
              dentists.map((dentist) => (
                <li key={dentist._id} className="dentist-item">
                  <button
                    className="dentist-selector"
                    onClick={() => selectDentist(dentist)}
                  >
                    <DentistIcon dentistFirstName={dentist.profile.firstName} />
                    <p>
                      {dentist.profile.firstName} {dentist.profile.lastName}
                    </p>
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
}
