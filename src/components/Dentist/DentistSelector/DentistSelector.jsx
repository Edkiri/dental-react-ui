import { useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import useDentists from '@/hooks/useDentits';
import { DentistIcon } from '../DentistIcon/DentistIcon';
import './DentistSelector.css';
import useOnClickOutside from '@/hooks/useOnClickOutside';

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
          onClick={() => setDropDown(!dropDown)}
        >
          {selectedDentist ? (
            <div className="dentist-item">
              <DentistIcon dentistId={selectedDentist._id} />
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
                    <DentistIcon dentistId={dentist._id} />
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
