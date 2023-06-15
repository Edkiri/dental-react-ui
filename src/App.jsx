import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
