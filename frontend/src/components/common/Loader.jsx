export default function Loader({ text = 'Loading...' }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5" style={{ minHeight: '40vh' }}>
      <div className="spinner-border text-primary mb-3" role="status">
        <span className="visually-hidden">{text}</span>
      </div>
      <p className="text-muted">{text}</p>
    </div>
  );
}
