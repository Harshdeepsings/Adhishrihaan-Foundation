const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const authService = require('../services/auth.service');
const MESSAGES = require('../constants/messages');

const register = asyncHandler(async (req, res) => {
  const { user, token } = await authService.register(req.body);
  ApiResponse.created(MESSAGES.REGISTER_SUCCESS, { user, token }).send(res);
});

const login = asyncHandler(async (req, res) => {
  const { user, token } = await authService.login(req.body);
  ApiResponse.success(MESSAGES.LOGIN_SUCCESS, { user, token }).send(res);
});

const logout = asyncHandler(async (req, res) => {
  // For JWT, logout is handled client-side by discarding the token.
  ApiResponse.success(MESSAGES.LOGOUT_SUCCESS).send(res);
});

module.exports = { register, login, logout };
