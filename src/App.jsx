import { Route, Routes } from 'react-router-dom';

import AuthContext from './user/auth-context';
import useAuth from './hooks/useAuth';

import Home from './pages/Home';
import Signup from './pages/Signup';
import SignupSucess from './pages/Signup/SignupSuccess';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import Header from './components/Header';

export default function App() {
  const { user, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
    </AuthContext.Provider>
  );
}
