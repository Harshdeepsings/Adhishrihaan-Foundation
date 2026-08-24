const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const { hashPassword, comparePassword } = require('../utils/password');
const { generateToken } = require('../utils/generateToken');
const MESSAGES = require('../constants/messages');

const register = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw ApiError.badRequest('Email already registered.');
  }

  const hashedPassword = await hashPassword(password);
  const user = await User.create({ name, email, password: hashedPassword });
  const token = generateToken({ id: user._id, role: user.role });

  return { user, token };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw ApiError.unauthorized(MESSAGES.INVALID_CREDENTIALS);
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw ApiError.unauthorized(MESSAGES.INVALID_CREDENTIALS);
  }

  const token = generateToken({ id: user._id, role: user.role });
  return { user, token };
};

module.exports = { register, login };
