import { useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import { AppointmentStatus } from '..';
import { APPOINTMENT_STATUS } from '@/utils/constants';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import './AppointmentStatusSelector.css';

export default function AppointmentStatusSelector({
  selectedStatus,
  setSelectedStatus,
}) {
  const [dropDown, setDropDown] = useState(false);

  const hideList = () => {
    setDropDown(false);
  };
  const statusListRef = useRef(null);
  useOnClickOutside(statusListRef, hideList);

  const selectStatus = (status) => {
    setSelectedStatus(status);
    setDropDown(false);
  };
  return (
    <>
      <div className="status-selector-component">
        <button
          className="status-dropdown"
          type="button"
          onClick={() => setDropDown(!dropDown)}
        >
          {selectedStatus ? (
            <div className="status-item">
              <AppointmentStatus status={selectedStatus} />
            </div>
          ) : (
            <AppointmentStatus status={"Todos"} />
          )}
          <FaAngleDown className={`dropdown-icon ${dropDown && 'active'}`} />
        </button>
        {dropDown && (
          <ul className="status-list" ref={statusListRef}>
            <li key={"Todos"} className="status-item">
              <button
                className="status-selector"
                onClick={() => selectStatus("Todos")}
              >
                <AppointmentStatus status={"Todos"} />
              </button>
            </li>
            {Object.values(APPOINTMENT_STATUS).map((status) => (
              <li key={status} className="status-item">
                <button
                  className="status-selector"
                  onClick={() => selectStatus(status)}
                >
                  <AppointmentStatus status={status} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
