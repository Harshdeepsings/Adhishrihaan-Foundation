import { pillars } from '../../data/programs';

export default function ProgramsPreview() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f4efe6' }}>
      <div className="container py-4">
        <h2 className="text-center text-primary mb-5 display-5 fw-bold">Pillars of Support</h2>
        <div className="row g-4">
          {pillars.map((pillar, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm text-center py-4 px-3 hover-lift" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h5 className="card-title text-primary fs-4 mb-3">{pillar.title}</h5>
                  <p className="card-text text-muted">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
