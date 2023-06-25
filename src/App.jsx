import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from '@/auth/AuthContext';

import Header from '@/components/Header/Header';

import Home from '@/pages/Home/Home';
import Signup from '@/pages/Signup/Signup';
import Login from '@/pages/Login/Login';
import Profile from '@/pages/Profile/Profile';
import AuthRoute from './auth/AuthRoute';
import NewAppointment from '@/pages/NewAppointment/NewAppointment';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <AuthProvider>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/create-appointment"
            element={<AuthRoute children={<NewAppointment />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}
