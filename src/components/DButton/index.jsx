import './DButton.css';

export default function DButton({ label, onClick }) {
  return (
    <button className="d-button" onClick={onClick}>
      {label}
    </button>
  );
}
