export default function SectionTitle({ children, className = '', displaySize = 'display-5' }) {
  return (
    <h2 className={`text-center text-primary mb-5 ${displaySize} fw-bold ${className}`}>
      {children}
    </h2>
  );
}
