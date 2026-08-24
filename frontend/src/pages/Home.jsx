import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import ImpactStats from '../components/home/ImpactStats';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProgramsPreview />
      <ImpactStats />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
