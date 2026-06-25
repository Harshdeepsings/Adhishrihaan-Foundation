import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export default function Volunteer() {
  const [status, setStatus] = useState('');
  const [variant, setVariant] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting application...');
    setVariant('info');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5000/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Application submitted successfully! We will contact you soon.');
        setVariant('success');
        e.target.reset();
      } else {
        setStatus('Something went wrong. Please try again.');
        setVariant('danger');
      }
    } catch {
      setStatus('Something went wrong. Please try again.');
      setVariant('danger');
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: '800px' }}>
      <h1 className="text-center text-primary mb-3 display-5 fw-bold">Become a Volunteer</h1>
      <p className="text-center text-muted mb-5 fs-5">
        Join our network of dedicated individuals who are making a real difference. Fill out the form below to get started.
      </p>
      
      <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md={6} controlId="formGridFirstName" className="mb-3 mb-md-0">
              <Form.Label className="text-muted">First Name</Form.Label>
              <Form.Control type="text" name="firstName" required className="p-3" />
            </Form.Group>

            <Form.Group as={Col} md={6} controlId="formGridLastName">
              <Form.Label className="text-muted">Last Name</Form.Label>
              <Form.Control type="text" name="lastName" required className="p-3" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={6} controlId="formGridEmail" className="mb-3 mb-md-0">
              <Form.Label className="text-muted">Email Address</Form.Label>
              <Form.Control type="email" name="email" required className="p-3" />
            </Form.Group>

            <Form.Group as={Col} md={6} controlId="formGridPhone">
              <Form.Label className="text-muted">Phone Number</Form.Label>
              <Form.Control type="tel" name="phone" required className="p-3" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridInterest">
            <Form.Label className="text-muted">Area of Interest</Form.Label>
            <Form.Select name="interest" required className="p-3">
              <option value="">Select an area</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="environment">Environment</option>
              <option value="animal-welfare">Animal Welfare</option>
              <option value="general">General Support</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGridReason">
            <Form.Label className="text-muted">Why do you want to volunteer?</Form.Label>
            <Form.Control as="textarea" rows={4} name="reason" required className="p-3" />
          </Form.Group>

          <Button variant="primary" type="submit" size="lg" className="w-100 mb-3">
            Submit Application
          </Button>

          {status && <Alert variant={variant} className="text-center">{status}</Alert>}
        </Form>
      </div>
    </Container>
  );
}
