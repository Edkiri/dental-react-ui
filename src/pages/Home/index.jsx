import HomeServiceSection from './components/HomeServicesSection';

import PerfectSmile from '../../../assets/sonrisa-perfecta.jpg';
import './Home.css';

export default function () {
  return (
    <main className="home-container">
      <h2>Sonreir forma parte del plan</h2>
      <p>Te ayudamos a que tu sonrisa sea tu mejor tarjeta de presentación</p>
      <img className='home-hero-img' src={PerfectSmile} alt="La sonrisa perfecta" />
      {/* <HomeServiceSection /> */}
    </main>
  );
}
