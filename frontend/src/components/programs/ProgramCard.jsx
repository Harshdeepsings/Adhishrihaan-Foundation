export default function ProgramCard({ title, desc }) {
  return (
    <div className="card h-100 border-0 shadow-sm" style={{ borderTop: '4px solid var(--bs-primary)' }}>
      <div className="card-body p-4">
        <h5 className="card-title text-primary fs-4 mb-3">{title}</h5>
        <p className="card-text text-muted fs-6">{desc}</p>
      </div>
    </div>
  );
}
