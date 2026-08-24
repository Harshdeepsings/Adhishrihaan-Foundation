const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const programService = require('../services/program.service');
const MESSAGES = require('../constants/messages');

const getPrograms = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const result = await programService.getPrograms(page, limit);
  ApiResponse.success(MESSAGES.FETCHED('Programs'), result).send(res);
});

const getProgramById = asyncHandler(async (req, res) => {
  const program = await programService.getProgramById(req.params.id);
  ApiResponse.success(MESSAGES.FETCHED('Program'), program).send(res);
});

const createProgram = asyncHandler(async (req, res) => {
  const program = await programService.createProgram(req.body);
  ApiResponse.created(MESSAGES.CREATED('Program'), program).send(res);
});

const updateProgram = asyncHandler(async (req, res) => {
  const program = await programService.updateProgram(req.params.id, req.body);
  ApiResponse.success(MESSAGES.UPDATED('Program'), program).send(res);
});

const deleteProgram = asyncHandler(async (req, res) => {
  await programService.deleteProgram(req.params.id);
  ApiResponse.success(MESSAGES.DELETED('Program')).send(res);
});

module.exports = { getPrograms, getProgramById, createProgram, updateProgram, deleteProgram };
