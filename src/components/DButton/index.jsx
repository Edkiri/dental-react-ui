import './DButton.css';

export default function DButton({ label, onClick, disabled, type }) {
  return (
    <button
      disabled={disabled || false}
      className="d-button"
      onClick={onClick}
      type={type || 'button'}
    >
      {label}
    </button>
  );
}
