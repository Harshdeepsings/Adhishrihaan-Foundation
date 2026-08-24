export default function PageLayout({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
