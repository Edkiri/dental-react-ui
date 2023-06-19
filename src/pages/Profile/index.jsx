import { useContext, useState } from 'react';

import ProfileData from './components/ProfileData';
import ProfileForm from './components/ProfileForm';
import './Profile.css';
import AuthContext from '../../auth/AuthContext';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [isUpdating, setIsUpdating] = useState(false);

  if (!user.onBoarded) return <ProfileForm setIsUpdating={setIsUpdating} />;

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
