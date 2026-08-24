export function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function isValidPhone(phone) {
  const re = /^[+]?[\d\s()-]{7,15}$/;
  return re.test(phone);
}

export function isRequired(value) {
  return value !== null && value !== undefined && value.toString().trim().length > 0;
}
