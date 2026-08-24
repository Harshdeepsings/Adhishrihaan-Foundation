import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-5" style={{ backgroundColor: '#e8ebd9' }}>
      <div className="container text-center py-4">
        <h2 className="text-primary mb-4 display-5 fw-bold">Join Our Mission</h2>
        <p className="lead mx-auto mb-5" style={{ maxWidth: '800px', color: '#4a4a4a' }}>
          Whether you want to volunteer your time, donate to our cause, or partner with us, 
          there are many ways to make an impact.
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <Link to="/volunteer" className="btn btn-primary btn-lg px-4">Become a Volunteer</Link>
          <Link to="/donate" className="btn btn-outline-primary btn-lg px-4">Make a Donation</Link>
        </div>
      </div>
    </section>
  );
}
