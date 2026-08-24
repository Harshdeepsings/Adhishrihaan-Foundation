export function formatDate(date, options = {}) {
  const defaults = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-IN', { ...defaults, ...options });
}
