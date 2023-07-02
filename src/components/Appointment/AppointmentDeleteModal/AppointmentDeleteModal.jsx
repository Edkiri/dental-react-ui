import { useRef } from 'react';

import { DForm, DFormTextarea } from '@/components/Core';
import useInputForm from '@/hooks/useInputForm';
import validators from '@/utils/validators';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import './AppointmentDeleteModal.css';

export default function AppointmentDeleteModal({ onSubmit, hide }) {
  const cancelReason = useInputForm('', validators.minTextLength);

  const deleteModalRef = useRef();
  useOnClickOutside(deleteModalRef, hide)

  const handleSubmit = async () => {
    if(cancelReason.value.trim() === "") return;
    onSubmit(cancelReason.value);
    hide();
  };

  return (
    <>
      <div className="delete-modal-container"></div>
      <div className="delete-modal" ref={deleteModalRef}>
        <DForm
          onSubmit={handleSubmit}
          btnLabel="Cancelar cita"
          title="Estás seguro que quieres cancelar?"
        >
          <DFormTextarea label="Motivo" {...cancelReason} />
        </DForm>
      </div>
    </>
  );
}
