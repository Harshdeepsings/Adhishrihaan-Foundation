import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" sticky="top" className="py-3 shadow-sm">
      <Container fluid className="px-4 px-md-5">
        <Navbar.Brand as={Link} to="/" className="fs-2 text-white">Adhishrihaan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-lg-4">
            <Nav.Link as={Link} to="/" className="text-white fw-medium" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="text-white fw-medium" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/grant" className="text-white fw-medium" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>THE SHRIHAAN SAHYOG GRANT</Nav.Link>
            <Nav.Link as={Link} to="/initiatives" className="text-white fw-medium" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>INITIATIVES</Nav.Link>
            
            <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0 ms-lg-3">
              <Button as={Link} to="/about-us" variant="outline-light" size="sm">KNOW MORE</Button>
              <Button as={Link} to="/volunteer" variant="outline-light" size="sm">VOLUNTEER</Button>
              <Button as={Link} to="/donate" variant="outline-light" size="sm">DONATE</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
