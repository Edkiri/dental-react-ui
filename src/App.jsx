import { Route, Routes } from 'react-router-dom';

import Header from '@/components/Header/Header';

import Home from '@/pages/Home/Home';
import Signup from '@/pages/Signup/Signup';
import Login from '@/pages/Login/Login';
import Profile from '@/pages/Profile/Profile';
import NewAppointment from '@/pages/NewAppointment/NewAppointment';
import PatientAppointments from './pages/PatientAppointments/PatientAppointments';
import NotFound from '@/pages/NotFound';
import { AuthRoute } from './guards';
import { ServiceProvider, AuthProvider } from './contexts';
import { PatientAppointmentsProvider } from './pages/PatientAppointments/contexts/PatientAppointmentContext';

export default function App() {
  return (
    <AppWithProviders>
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
          <Route
            path="/my-appointments"
            element={<AuthRoute children={<PatientAppointments />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </AppWithProviders>
  );
}

function AppWithProviders({ children }) {
  return (
    <AuthProvider>
      <ServiceProvider>
        <PatientAppointmentsProvider>{children}</PatientAppointmentsProvider>
      </ServiceProvider>
    </AuthProvider>
  );
}
