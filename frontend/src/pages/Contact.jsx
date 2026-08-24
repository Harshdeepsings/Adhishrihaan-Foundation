import { Container } from 'react-bootstrap';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';

export default function Contact() {
  return (
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <h1 className="text-center text-primary mb-4 display-5 fw-bold">Contact Us</h1>
      <ContactForm />
      <ContactInfo />
      <Map />
    </Container>
  );
}
