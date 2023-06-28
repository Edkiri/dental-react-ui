import { useNavigate } from 'react-router-dom';

import PerfectSmile from '../../../assets/sonrisa-perfecta.jpg';
import HomeServiceSection from './components/HomeServicesSection';
import { DFilledButton } from '@/components/Core';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleNewAppointment = (event) => {
    navigate('/create-appointment');
  };

  return (
    <section className="home-container">
      <h1>Sonreir forma parte del plan</h1>
      <p>Te ayudamos a que tu sonrisa sea tu mejor tarjeta de presentación</p>
      <img
        className="home-hero-img"
        src={PerfectSmile}
        alt="La sonrisa perfecta"
      />
      <DFilledButton label="Pide tu cita!" onClick={handleNewAppointment} />
      <HomeServiceSection />
    </section>
  );
}
