const MESSAGES = Object.freeze({
  // Auth
  REGISTER_SUCCESS: 'User registered successfully.',
  LOGIN_SUCCESS: 'Login successful.',
  LOGOUT_SUCCESS: 'Logged out successfully.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  TOKEN_EXPIRED: 'Token has expired. Please login again.',
  TOKEN_MISSING: 'Authentication token is missing.',

  // CRUD
  CREATED: (resource) => `${resource} created successfully.`,
  UPDATED: (resource) => `${resource} updated successfully.`,
  DELETED: (resource) => `${resource} deleted successfully.`,
  NOT_FOUND: (resource) => `${resource} not found.`,
  FETCHED: (resource) => `${resource} fetched successfully.`,

  // Contact & Volunteer
  CONTACT_SUCCESS: 'Message received successfully.',
  VOLUNTEER_SUCCESS: 'Application received successfully.',

  // General
  SERVER_ERROR: 'Internal server error.',
  VALIDATION_ERROR: 'Validation failed.',
  RATE_LIMIT: 'Too many requests. Please try again later.',
});

module.exports = MESSAGES;
