const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const userService = require('../services/user.service');
const MESSAGES = require('../constants/messages');

const getUsers = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const result = await userService.getUsers(page, limit);
  ApiResponse.success(MESSAGES.FETCHED('Users'), result).send(res);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  ApiResponse.success(MESSAGES.FETCHED('User'), user).send(res);
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  ApiResponse.success(MESSAGES.UPDATED('User'), user).send(res);
});

const deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id);
  ApiResponse.success(MESSAGES.DELETED('User')).send(res);
});

const getMe = asyncHandler(async (req, res) => {
  ApiResponse.success(MESSAGES.FETCHED('Profile'), req.user).send(res);
});

module.exports = { getUsers, getUserById, updateUser, deleteUser, getMe };
