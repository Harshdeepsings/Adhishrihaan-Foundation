export default function AboutPreview() {
  return (
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
  );
}
