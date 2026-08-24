import { Navigate } from 'react-router-dom';

// ProtectedRoute placeholder — ready for future auth-gated routes
export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // Replace with actual auth check

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
