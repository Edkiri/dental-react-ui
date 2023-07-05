import './DFormInput.css';

export default function DFormInput({
  label,
  error,
  errorMessage,
  ...inputProps
}) {
  return (
    <div className="d-form-input-container">
      <label className="d-form-label" htmlFor={inputProps.id}>
        {label}
      </label>
      <input
        {...inputProps}
        type={inputProps.type || 'text'}
        className={`d-form-input ${error && 'd-form-input-error'}`}
      />
      {error ? (<span className="d-span-error">{errorMessage}</span>) : (<></>)}
    </div>
  );
}
