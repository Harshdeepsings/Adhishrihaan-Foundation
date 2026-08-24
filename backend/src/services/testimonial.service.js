const Testimonial = require('../models/Testimonial');
const ApiError = require('../utils/ApiError');
const MESSAGES = require('../constants/messages');
const { paginate, paginationMeta } = require('../utils/pagination');

const getTestimonials = async (page, limit, activeOnly = false) => {
  const { skip, limit: lim, page: p } = paginate(page, limit);
  const filter = activeOnly ? { isActive: true } : {};
  const [testimonials, total] = await Promise.all([
    Testimonial.find(filter).skip(skip).limit(lim).sort({ order: 1, createdAt: -1 }),
    Testimonial.countDocuments(filter),
  ]);
  return { testimonials, pagination: paginationMeta(total, p, lim) };
};

const getTestimonialById = async (id) => {
  const testimonial = await Testimonial.findById(id);
  if (!testimonial) throw ApiError.notFound(MESSAGES.NOT_FOUND('Testimonial'));
  return testimonial;
};

const createTestimonial = async (data) => {
  return Testimonial.create(data);
};

const updateTestimonial = async (id, data) => {
  const testimonial = await Testimonial.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  if (!testimonial) throw ApiError.notFound(MESSAGES.NOT_FOUND('Testimonial'));
  return testimonial;
};

const deleteTestimonial = async (id) => {
  const testimonial = await Testimonial.findByIdAndDelete(id);
  if (!testimonial) throw ApiError.notFound(MESSAGES.NOT_FOUND('Testimonial'));
  return testimonial;
};

module.exports = { getTestimonials, getTestimonialById, createTestimonial, updateTestimonial, deleteTestimonial };
