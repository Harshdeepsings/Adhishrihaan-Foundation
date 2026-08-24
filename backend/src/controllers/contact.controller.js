const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const contactService = require('../services/contact.service');
const MESSAGES = require('../constants/messages');

const submitContact = asyncHandler(async (req, res) => {
  await contactService.submitContact(req.body);
  // Preserve original response format for backward compatibility
  res.status(200).json({ success: true, message: MESSAGES.CONTACT_SUCCESS });
});

const submitVolunteer = asyncHandler(async (req, res) => {
  await contactService.submitVolunteer(req.body);
  // Preserve original response format for backward compatibility
  res.status(200).json({ success: true, message: MESSAGES.VOLUNTEER_SUCCESS });
});

const getContacts = asyncHandler(async (req, res) => {
  const { page, limit, type } = req.query;
  const result = await contactService.getContacts(page, limit, type);
  ApiResponse.success(MESSAGES.FETCHED('Contacts'), result).send(res);
});

const getContactById = asyncHandler(async (req, res) => {
  const contact = await contactService.getContactById(req.params.id);
  ApiResponse.success(MESSAGES.FETCHED('Contact'), contact).send(res);
});

const markAsRead = asyncHandler(async (req, res) => {
  const contact = await contactService.markAsRead(req.params.id);
  ApiResponse.success(MESSAGES.UPDATED('Contact'), contact).send(res);
});

const deleteContact = asyncHandler(async (req, res) => {
  await contactService.deleteContact(req.params.id);
  ApiResponse.success(MESSAGES.DELETED('Contact')).send(res);
});

module.exports = { submitContact, submitVolunteer, getContacts, getContactById, markAsRead, deleteContact };
