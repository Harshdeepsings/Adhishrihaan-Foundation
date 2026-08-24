const cloudinary = require('../config/cloudinary');
const fs = require('fs');

/**
 * Upload a file to Cloudinary.
 * @param {string} filePath - Local file path
 * @param {string} folder - Cloudinary folder name
 * @returns {Promise<{url: string, publicId: string}>}
 */
const uploadToCloudinary = async (filePath, folder = 'adhishrihaan') => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder,
    resource_type: 'auto',
  });

  // Remove local file after upload
  fs.unlinkSync(filePath);

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
};

/**
 * Delete a file from Cloudinary.
 * @param {string} publicId
 */
const deleteFromCloudinary = async (publicId) => {
  await cloudinary.uploader.destroy(publicId);
};

module.exports = { uploadToCloudinary, deleteFromCloudinary };
