import { useState } from 'react';

export default function useInputForm(initialValue, validator) {
  const [value, setValue] = useState(initialValue || '');
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    if (error) {
      const isValid = validator.pattern.test(event.target.value);
      if (isValid) {
        setError(false);
      }
    }
    setValue(event.target.value);
  };

  const handleBlur = (event) => {
    if (!validator) return;
    const isValid = validator.pattern.test(event.target.value);
    if (!isValid) setError(true);
  };

  let errorMessage = '';
  if (validator) {
    errorMessage = validator.errorMessage;
  }

  return {
    value,
    error,
    errorMessage,
    onChange: handleChange,
    onBlur: handleBlur,
    maxLength: 200,
  };
}
