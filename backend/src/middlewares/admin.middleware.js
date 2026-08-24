const ApiError = require('../utils/ApiError');
const ROLES = require('../constants/roles');
const MESSAGES = require('../constants/messages');

const adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== ROLES.ADMIN) {
    return next(ApiError.forbidden(MESSAGES.FORBIDDEN));
  }
  next();
};

module.exports = adminMiddleware;
