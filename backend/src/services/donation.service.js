const Donation = require('../models/Donation');
const ApiError = require('../utils/ApiError');
const MESSAGES = require('../constants/messages');
const { paginate, paginationMeta } = require('../utils/pagination');

const createDonation = async (data) => {
  return Donation.create(data);
};

const getDonations = async (page, limit) => {
  const { skip, limit: lim, page: p } = paginate(page, limit);
  const [donations, total] = await Promise.all([
    Donation.find().skip(skip).limit(lim).sort({ createdAt: -1 }),
    Donation.countDocuments(),
  ]);
  return { donations, pagination: paginationMeta(total, p, lim) };
};

const getDonationById = async (id) => {
  const donation = await Donation.findById(id);
  if (!donation) throw ApiError.notFound(MESSAGES.NOT_FOUND('Donation'));
  return donation;
};

const updateDonationStatus = async (id, status) => {
  const donation = await Donation.findByIdAndUpdate(id, { status }, { new: true });
  if (!donation) throw ApiError.notFound(MESSAGES.NOT_FOUND('Donation'));
  return donation;
};

const deleteDonation = async (id) => {
  const donation = await Donation.findByIdAndDelete(id);
  if (!donation) throw ApiError.notFound(MESSAGES.NOT_FOUND('Donation'));
  return donation;
};

module.exports = { createDonation, getDonations, getDonationById, updateDonationStatus, deleteDonation };
