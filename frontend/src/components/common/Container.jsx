export default function Container({ children, className = '', fluid = false, ...props }) {
  const baseClass = fluid ? 'container-fluid' : 'container';
  return (
    <div className={`${baseClass} ${className}`} {...props}>
      {children}
    </div>
  );
}
