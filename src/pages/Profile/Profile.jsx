import { useContext, useState } from 'react';

import ProfileData from './components/ProfileData';
import ProfileForm from './components/ProfileForm';
import { AuthContext } from '@/contexts';
import './Profile.css';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [isUpdating, setIsUpdating] = useState(false);

  if (!user.onBoarded) return <ProfileForm setIsUpdating={setIsUpdating} />;

  return (
    <main className="profile-container">
      {isUpdating ? (
        <ProfileForm setIsUpdating={setIsUpdating} />
      ) : (
        <ProfileData setIsUpdating={setIsUpdating} />
      )}
    </main>
  );
}
