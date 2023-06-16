import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './auth/AuthContext';

import Header from './components/Header';

import Home from './pages/Home';
import Signup from './pages/Signup';
import SignupSucess from './pages/Signup/SignupSuccess';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <AuthProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account-created" element={<SignupSucess />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </AuthProvider>
  );
}
