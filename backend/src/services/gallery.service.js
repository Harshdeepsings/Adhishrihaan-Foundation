const Gallery = require('../models/Gallery');
const ApiError = require('../utils/ApiError');
const MESSAGES = require('../constants/messages');
const { paginate, paginationMeta } = require('../utils/pagination');

const getGalleryItems = async (page, limit) => {
  const { skip, limit: lim, page: p } = paginate(page, limit);
  const [items, total] = await Promise.all([
    Gallery.find().skip(skip).limit(lim).sort({ order: 1, createdAt: -1 }),
    Gallery.countDocuments(),
  ]);
  return { items, pagination: paginationMeta(total, p, lim) };
};

const getGalleryById = async (id) => {
  const item = await Gallery.findById(id);
  if (!item) throw ApiError.notFound(MESSAGES.NOT_FOUND('Gallery item'));
  return item;
};

const createGalleryItem = async (data) => {
  return Gallery.create(data);
};

const updateGalleryItem = async (id, data) => {
  const item = await Gallery.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  if (!item) throw ApiError.notFound(MESSAGES.NOT_FOUND('Gallery item'));
  return item;
};

const deleteGalleryItem = async (id) => {
  const item = await Gallery.findByIdAndDelete(id);
  if (!item) throw ApiError.notFound(MESSAGES.NOT_FOUND('Gallery item'));
  return item;
};

module.exports = { getGalleryItems, getGalleryById, createGalleryItem, updateGalleryItem, deleteGalleryItem };
