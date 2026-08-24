import AboutHero from '../components/about/AboutHero';
import Values from '../components/about/Values';
import Vision from '../components/about/Vision';
import Mission from '../components/about/Mission';
import Team from '../components/about/Team';

export default function About() {
  return (
    <div className="container py-5">
      <AboutHero />
      
      <div className="row align-items-center gy-5 mt-3">
        <div className="col-md-6">
          <Values />
        </div>
        
        <div className="col-md-6">
          <div className="bg-primary text-white p-4 p-lg-5 rounded-4 shadow">
            <Vision />
            <Mission />
          </div>
        </div>
      </div>
      
      <Team />
    </div>
  );
}
