const Program = require('../models/Program');
const ApiError = require('../utils/ApiError');
const MESSAGES = require('../constants/messages');
const { paginate, paginationMeta } = require('../utils/pagination');

const getPrograms = async (page, limit) => {
  const { skip, limit: lim, page: p } = paginate(page, limit);
  const [programs, total] = await Promise.all([
    Program.find().skip(skip).limit(lim).sort({ order: 1, createdAt: -1 }),
    Program.countDocuments(),
  ]);
  return { programs, pagination: paginationMeta(total, p, lim) };
};

const getProgramById = async (id) => {
  const program = await Program.findById(id);
  if (!program) throw ApiError.notFound(MESSAGES.NOT_FOUND('Program'));
  return program;
};

const createProgram = async (data) => {
  return Program.create(data);
};

const updateProgram = async (id, data) => {
  const program = await Program.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  if (!program) throw ApiError.notFound(MESSAGES.NOT_FOUND('Program'));
  return program;
};

const deleteProgram = async (id) => {
  const program = await Program.findByIdAndDelete(id);
  if (!program) throw ApiError.notFound(MESSAGES.NOT_FOUND('Program'));
  return program;
};

module.exports = { getPrograms, getProgramById, createProgram, updateProgram, deleteProgram };
