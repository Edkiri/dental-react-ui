import { useState, useEffect } from 'react';

import { getDentits } from '@/api';

export default function useDentists() {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dentists = await getDentits();
        setDentists(dentists);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { dentists };
}
