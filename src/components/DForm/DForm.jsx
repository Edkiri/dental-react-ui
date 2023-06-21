import DFilledButton from '../DFilledButton';
import './DForm.css';

export default function DForm({ children, btnLabel, onSubmit, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="d-form" onSubmit={handleSubmit}>
      {children}
      <DFilledButton label={btnLabel} type={'submit'} disabled={loading} />
    </form>
  );
}
