import { Route, Routes } from 'react-router-dom';

import Header from '@/components/Header/Header';

import Home from '@/pages/Home/Home';
import Signup from '@/pages/Signup/Signup';
import Login from '@/pages/Login/Login';
import Profile from '@/pages/Profile/Profile';
import NewAppointment from '@/pages/NewAppointment/NewAppointment';
import NotFound from '@/pages/NotFound';
import { AdminRoute, AuthRoute } from './guards';
import {
  ServiceProvider,
  AuthProvider,
  AppointmentsProvider,
} from './contexts';
import PatientAppointmentsList from './pages/PatientAppointmentsList/PatientAppointmentsList';
import AppointmentDetail from './pages/AppointmentDetail/AppointmentDetail';
import AppointmentUpdate from './pages/AppointmentUpdate/AppointmentUpdate';
import DentistAppointmentList from './pages/DentistAppointmentList/DentistAppointmentList';

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
            element={<AuthRoute children={<PatientAppointmentsList />} />}
          />
          <Route
            path="/appointment/:appointmentId"
            element={<AuthRoute children={<AppointmentDetail />} />}
          />
          <Route
            path="/update-appointment/:appointmentId"
            element={<AuthRoute children={<AppointmentUpdate />} />}
          />
          <Route
            path="/dentist-appointments"
            element={<AdminRoute children={<DentistAppointmentList />} />}
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
        <AppointmentsProvider>{children}</AppointmentsProvider>
      </ServiceProvider>
    </AuthProvider>
  );
}
