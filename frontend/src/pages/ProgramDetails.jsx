// ProgramDetails page placeholder — ready for individual program pages
import { useParams } from 'react-router-dom';

export default function ProgramDetailsPage() {
  const { id } = useParams();
  
  return (
    <div className="container py-5 text-center" style={{ minHeight: '50vh' }}>
      <h1 className="text-primary mb-4 display-5 fw-bold">Program Details</h1>
      <p className="text-muted fs-5">Details for program {id} coming soon.</p>
    </div>
  );
}
