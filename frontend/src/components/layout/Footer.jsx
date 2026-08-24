import { Link } from 'react-router-dom';
import { footerQuickLinks, footerGetInvolved } from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-5 mt-5">
      <div className="container mb-4">
        <div className="row gy-4">
          <div className="col-lg-6">
            <h3 className="navbar-brand fs-3 mb-3">Adhishrihaan</h3>
            <p className="opacity-75" style={{ fontSize: '0.95rem', maxWidth: '400px' }}>
              Empowering Those Who Empower Others. Investing in Grassroots, Investing in India&apos;s Future.
            </p>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <h4 className="text-uppercase mb-4" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>Quick Links</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white text-decoration-none opacity-75">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <h4 className="text-uppercase mb-4" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>Get Involved</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {footerGetInvolved.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white text-decoration-none opacity-75">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-top border-light border-opacity-10">
        <p className="mb-0 opacity-75" style={{ fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Adhishrihaan Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
