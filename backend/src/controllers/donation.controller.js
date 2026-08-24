const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const donationService = require('../services/donation.service');
const MESSAGES = require('../constants/messages');

const createDonation = asyncHandler(async (req, res) => {
  const donation = await donationService.createDonation(req.body);
  ApiResponse.created(MESSAGES.CREATED('Donation'), donation).send(res);
});

const getDonations = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const result = await donationService.getDonations(page, limit);
  ApiResponse.success(MESSAGES.FETCHED('Donations'), result).send(res);
});

const getDonationById = asyncHandler(async (req, res) => {
  const donation = await donationService.getDonationById(req.params.id);
  ApiResponse.success(MESSAGES.FETCHED('Donation'), donation).send(res);
});

const updateDonationStatus = asyncHandler(async (req, res) => {
  const donation = await donationService.updateDonationStatus(req.params.id, req.body.status);
  ApiResponse.success(MESSAGES.UPDATED('Donation'), donation).send(res);
});

const deleteDonation = asyncHandler(async (req, res) => {
  await donationService.deleteDonation(req.params.id);
  ApiResponse.success(MESSAGES.DELETED('Donation')).send(res);
});

module.exports = { createDonation, getDonations, getDonationById, updateDonationStatus, deleteDonation };
