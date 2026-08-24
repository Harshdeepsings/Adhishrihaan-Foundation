import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container py-5 d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '60vh' }}>
      <h1 className="display-1 fw-bold text-primary mb-3">404</h1>
      <h2 className="text-primary mb-4">Page Not Found</h2>
      <p className="text-muted fs-5 mb-5" style={{ maxWidth: '500px' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary btn-lg px-5">Go Home</Link>
    </div>
  );
}
