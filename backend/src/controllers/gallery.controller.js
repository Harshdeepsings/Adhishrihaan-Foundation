const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const galleryService = require('../services/gallery.service');
const MESSAGES = require('../constants/messages');

const getGalleryItems = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const result = await galleryService.getGalleryItems(page, limit);
  ApiResponse.success(MESSAGES.FETCHED('Gallery'), result).send(res);
});

const getGalleryById = asyncHandler(async (req, res) => {
  const item = await galleryService.getGalleryById(req.params.id);
  ApiResponse.success(MESSAGES.FETCHED('Gallery item'), item).send(res);
});

const createGalleryItem = asyncHandler(async (req, res) => {
  const item = await galleryService.createGalleryItem(req.body);
  ApiResponse.created(MESSAGES.CREATED('Gallery item'), item).send(res);
});

const updateGalleryItem = asyncHandler(async (req, res) => {
  const item = await galleryService.updateGalleryItem(req.params.id, req.body);
  ApiResponse.success(MESSAGES.UPDATED('Gallery item'), item).send(res);
});

const deleteGalleryItem = asyncHandler(async (req, res) => {
  await galleryService.deleteGalleryItem(req.params.id);
  ApiResponse.success(MESSAGES.DELETED('Gallery item')).send(res);
});

module.exports = { getGalleryItems, getGalleryById, createGalleryItem, updateGalleryItem, deleteGalleryItem };
