import './DInput.css';

export default function DInput({ id, name, value, onChange, type, label }) {
  return (
    <label className="d-form-label" htmlFor={id}>
      {label}
      <input
        className="d-form-input"
        id={id}
        type={type || 'text'}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
