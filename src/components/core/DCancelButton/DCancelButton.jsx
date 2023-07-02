import './DCancelButton.css';

export default function DCancelButton({ label, onClick, disabled, type }) {
  return (
    <button
      disabled={disabled || false}
      className="d-cancel-button"
      onClick={onClick}
      type={type || 'button'}
    >
      {label}
    </button>
  );
}
