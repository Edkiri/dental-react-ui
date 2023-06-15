import { useState } from 'react';

export default function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
}
