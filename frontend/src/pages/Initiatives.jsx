const initiatives = [
  { title: "Woman and Child Welfare", desc: "Empowering women and protecting children through education, safety, and health programs." },
  { title: "Healthcare", desc: "Improving access to basic medical facilities and health awareness in rural communities." },
  { title: "Education", desc: "Providing quality education and learning resources to underprivileged children." },
  { title: "Environment", desc: "Promoting sustainable practices, tree plantation, and waste management." },
  { title: "Skills Development", desc: "Vocational training programs to enhance employability and foster self-reliance." },
  { title: "Animal Welfare", desc: "Rescuing, treating, and sheltering stray animals, and promoting compassionate coexistence." },
  { title: "Elderly Care", desc: "Supporting senior citizens with medical care, companionship, and safe living environments." }
];

export default function Initiatives() {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-5 display-5 fw-bold">Our Core Initiatives</h1>
      
      <div className="row g-4">
        {initiatives.map((init, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="card h-100 border-0 shadow-sm" style={{ borderTop: '4px solid var(--bs-primary)' }}>
              <div className="card-body p-4">
                <h5 className="card-title text-primary fs-4 mb-3">{init.title}</h5>
                <p className="card-text text-muted fs-6">{init.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
