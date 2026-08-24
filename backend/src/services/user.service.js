const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const MESSAGES = require('../constants/messages');
const { paginate, paginationMeta } = require('../utils/pagination');

const getUsers = async (page, limit) => {
  const { skip, limit: lim, page: p } = paginate(page, limit);
  const [users, total] = await Promise.all([
    User.find().skip(skip).limit(lim).sort({ createdAt: -1 }),
    User.countDocuments(),
  ]);
  return { users, pagination: paginationMeta(total, p, lim) };
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) throw ApiError.notFound(MESSAGES.NOT_FOUND('User'));
  return user;
};

const updateUser = async (id, data) => {
  const user = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  if (!user) throw ApiError.notFound(MESSAGES.NOT_FOUND('User'));
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw ApiError.notFound(MESSAGES.NOT_FOUND('User'));
  return user;
};

module.exports = { getUsers, getUserById, updateUser, deleteUser };
