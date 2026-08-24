import ProgramGrid from '../components/programs/ProgramGrid';
import { initiatives } from '../data/programs';

export default function Programs() {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-5 display-5 fw-bold">Our Core Initiatives</h1>
      <ProgramGrid programs={initiatives} />
    </div>
  );
}
