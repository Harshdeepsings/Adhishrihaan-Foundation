import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section className="py-5" style={{ backgroundColor: 'var(--bs-secondary)' }}>
        <div className="container text-center py-4">
          <h2 className="text-primary mb-4 display-5 fw-bold">Welcome to Adhishrihaan</h2>
          <p className="lead mx-auto" style={{ maxWidth: '800px', color: '#4a4a4a' }}>
            We are a philanthropic organization dedicated to supporting grassroots micro-NGOs in India. 
            Rooted in love and rising through service, we empower those who empower others by providing 
            capacity building, visibility, and networking opportunities.
          </p>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: '#f4efe6' }}>
        <div className="container py-4">
          <h2 className="text-center text-primary mb-5 display-5 fw-bold">Pillars of Support</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center py-4 px-3 hover-lift" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h5 className="card-title text-primary fs-4 mb-3">Capacity Building</h5>
                  <p className="card-text text-muted">
                    Providing resources and training to strengthen the operational capabilities of micro-NGOs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center py-4 px-3 hover-lift" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h5 className="card-title text-primary fs-4 mb-3">Visibility</h5>
                  <p className="card-text text-muted">
                    Enhancing the profile and reach of grassroots organizations to attract more support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center py-4 px-3 hover-lift" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h5 className="card-title text-primary fs-4 mb-3">Networking</h5>
                  <p className="card-text text-muted">
                    Connecting changemakers with mentors, donors, and other organizations for collaborative impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
