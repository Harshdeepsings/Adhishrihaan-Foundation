import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

export default function ContactUs() {
  const [status, setStatus] = useState('');
  const [variant, setVariant] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setVariant('info');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Thank you for reaching out! We will get back to you soon.');
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
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <h1 className="text-center text-primary mb-4 display-5 fw-bold">Contact Us</h1>
      
      <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className="text-muted">Full Name</Form.Label>
            <Form.Control type="text" name="name" required className="p-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="text-muted">Email Address</Form.Label>
            <Form.Control type="email" name="email" required className="p-3" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Label className="text-muted">Message</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" required className="p-3" />
          </Form.Group>

          <Button variant="primary" type="submit" size="lg" className="w-100 mb-3">
            Send Message
          </Button>

          {status && <Alert variant={variant} className="text-center">{status}</Alert>}
        </Form>
      </div>
    </Container>
  );
}
