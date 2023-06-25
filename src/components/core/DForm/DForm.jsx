import { DFilledButton } from '@/components/core';
import './DForm.css';

export default function DForm({
  children,
  btnLabel,
  title,
  onSubmit,
  loading,
  error,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="d-form" onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {children}
      <DFilledButton label={btnLabel} type="submit" disabled={loading} />
      {error && <span className="d-form-error">{error}</span>}
    </form>
  );
}
