const rateLimit = require('express-rate-limit');
const env = require('../config/env');
const MESSAGES = require('../constants/messages');

const rateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  message: {
    success: false,
    message: MESSAGES.RATE_LIMIT,
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = rateLimiter;
