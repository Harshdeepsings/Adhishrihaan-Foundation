import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="container py-5 d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '60vh' }}>
      <h1 className="display-3 fw-bold text-primary mb-3">Oops!</h1>
      <h2 className="text-primary mb-4">Something went wrong</h2>
      <p className="text-muted fs-5 mb-5" style={{ maxWidth: '500px' }}>
        An unexpected error has occurred. Please try again later.
      </p>
      <Link to="/" className="btn btn-primary btn-lg px-5">Go Home</Link>
    </div>
  );
}
