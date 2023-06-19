import { useState } from 'react';

import ProfileData from './components/ProfileData';
import ProfileForm from './components/ProfileForm';
import './Profile.css';

export default function Profile() {
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <main>
      {isUpdating ? (
        <ProfileForm setIsUpdating={setIsUpdating} />
      ) : (
        <ProfileData setIsUpdating={setIsUpdating} />
      )}
    </main>
  );
}
