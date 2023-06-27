import './DFormTextarea.css';

export default function DFormTextarea({
  label,
  error,
  errorMessage,
  ...textAreaProps
}) {
  return (
    <div className="d-form-textarea-container">
      <label className="d-form-label" htmlFor={textAreaProps.id}>
        {label}
      </label>
      <textarea
        {...textAreaProps}
        type={textAreaProps.type || 'text'}
        rows={3}
        className={`d-form-textarea ${error && 'd-form-input-error'}`}
      />
      {error && <span className="d-span-error">{errorMessage}</span>}
    </div>
  );
}
