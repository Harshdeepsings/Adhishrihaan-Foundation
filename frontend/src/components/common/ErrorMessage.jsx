import { Alert } from 'react-bootstrap';

export default function ErrorMessage({ message = 'Something went wrong. Please try again.', variant = 'danger' }) {
  return (
    <Alert variant={variant} className="text-center my-4">
      {message}
    </Alert>
  );
}
