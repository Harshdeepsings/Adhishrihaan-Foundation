const ApiError = require('../utils/ApiError');
const { verifyToken } = require('../utils/generateToken');
const User = require('../models/User');
const MESSAGES = require('../constants/messages');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw ApiError.unauthorized(MESSAGES.TOKEN_MISSING);
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      throw ApiError.unauthorized(MESSAGES.UNAUTHORIZED);
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return next(ApiError.unauthorized(MESSAGES.TOKEN_EXPIRED));
    }
    next(error);
  }
};

module.exports = authMiddleware;
