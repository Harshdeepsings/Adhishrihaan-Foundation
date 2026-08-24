import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { navLinks, actionButtons } from '../../data/navigation';

export default function Navbar() {
  return (
    <BsNavbar expand="lg" bg="primary" variant="dark" sticky="top" className="py-3 shadow-sm">
      <Container fluid className="px-4 px-md-5">
        <BsNavbar.Brand as={Link} to="/" className="fs-2 text-white">Adhishrihaan</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-lg-4">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                className="text-white fw-medium"
                style={{ fontSize: '0.85rem', letterSpacing: '1px' }}
              >
                {link.label}
              </Nav.Link>
            ))}
            
            <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0 ms-lg-3">
              {actionButtons.map((btn) => (
                <Button
                  key={btn.path}
                  as={Link}
                  to={btn.path}
                  variant={btn.variant}
                  size="sm"
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
