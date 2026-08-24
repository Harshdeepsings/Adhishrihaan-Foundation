const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const testimonialService = require('../services/testimonial.service');
const MESSAGES = require('../constants/messages');

const getTestimonials = asyncHandler(async (req, res) => {
  const { page, limit, active } = req.query;
  const result = await testimonialService.getTestimonials(page, limit, active === 'true');
  ApiResponse.success(MESSAGES.FETCHED('Testimonials'), result).send(res);
});

const getTestimonialById = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.getTestimonialById(req.params.id);
  ApiResponse.success(MESSAGES.FETCHED('Testimonial'), testimonial).send(res);
});

const createTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.createTestimonial(req.body);
  ApiResponse.created(MESSAGES.CREATED('Testimonial'), testimonial).send(res);
});

const updateTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.updateTestimonial(req.params.id, req.body);
  ApiResponse.success(MESSAGES.UPDATED('Testimonial'), testimonial).send(res);
});

const deleteTestimonial = asyncHandler(async (req, res) => {
  await testimonialService.deleteTestimonial(req.params.id);
  ApiResponse.success(MESSAGES.DELETED('Testimonial')).send(res);
});

module.exports = { getTestimonials, getTestimonialById, createTestimonial, updateTestimonial, deleteTestimonial };
