import { Button as BsButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Button({ children, to, variant = 'primary', size, className = '', ...props }) {
  if (to) {
    return (
      <BsButton as={Link} to={to} variant={variant} size={size} className={className} {...props}>
        {children}
      </BsButton>
    );
  }

  return (
    <BsButton variant={variant} size={size} className={className} {...props}>
      {children}
    </BsButton>
  );
}
