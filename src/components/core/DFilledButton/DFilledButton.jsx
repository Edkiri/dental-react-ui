import './DFilledButton.css';

export default function DFilledButton({ label, onClick, disabled }) {
  return (
    <button
      disabled={disabled || false}
      className="d-filled-button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
