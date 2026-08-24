const Contact = require('../models/Contact');
const MESSAGES = require('../constants/messages');
const { paginate, paginationMeta } = require('../utils/pagination');
const ApiError = require('../utils/ApiError');

const submitContact = async (data) => {
  const contact = await Contact.create({
    ...data,
    type: 'contact',
  });
  return contact;
};

const submitVolunteer = async (data) => {
  const volunteer = await Contact.create({
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    message: data.reason,
    type: 'volunteer',
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    interest: data.interest,
    reason: data.reason,
  });
  return volunteer;
};

const getContacts = async (page, limit, type) => {
  const { skip, limit: lim, page: p } = paginate(page, limit);
  const filter = type ? { type } : {};
  const [contacts, total] = await Promise.all([
    Contact.find(filter).skip(skip).limit(lim).sort({ createdAt: -1 }),
    Contact.countDocuments(filter),
  ]);
  return { contacts, pagination: paginationMeta(total, p, lim) };
};

const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  if (!contact) throw ApiError.notFound(MESSAGES.NOT_FOUND('Contact'));
  return contact;
};

const markAsRead = async (id) => {
  const contact = await Contact.findByIdAndUpdate(id, { isRead: true }, { new: true });
  if (!contact) throw ApiError.notFound(MESSAGES.NOT_FOUND('Contact'));
  return contact;
};

const deleteContact = async (id) => {
  const contact = await Contact.findByIdAndDelete(id);
  if (!contact) throw ApiError.notFound(MESSAGES.NOT_FOUND('Contact'));
  return contact;
};

module.exports = { submitContact, submitVolunteer, getContacts, getContactById, markAsRead, deleteContact };
