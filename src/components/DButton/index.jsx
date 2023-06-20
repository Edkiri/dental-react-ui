import './DButton.css';

export default function DButton({ label, onClick, disabled }) {
  return (
    <button disabled={disabled || false} className="d-button" onClick={onClick}>
      {label}
    </button>
  );
}
