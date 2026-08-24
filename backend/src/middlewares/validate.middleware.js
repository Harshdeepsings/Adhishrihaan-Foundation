const ApiError = require('../utils/ApiError');
const MESSAGES = require('../constants/messages');

/**
 * Middleware factory that validates req.body against a Zod schema.
 * @param {import('zod').ZodSchema} schema
 */
const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));
    return next(new ApiError(400, MESSAGES.VALIDATION_ERROR, errors));
  }

  req.body = result.data;
  next();
};

module.exports = validate;
