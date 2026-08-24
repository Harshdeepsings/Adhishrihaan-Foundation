import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import ProgramDetailsPage from '../pages/ProgramDetails';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Donate from '../pages/Donate';
import Grant from '../pages/Grant';
import Volunteer from '../pages/Volunteer';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/initiatives" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetailsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/grant" element={<Grant />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
