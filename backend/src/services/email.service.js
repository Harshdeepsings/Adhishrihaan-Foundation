// Email service placeholder — ready for Nodemailer integration

const env = require('../config/env');

const sendEmail = async ({ to, subject, html }) => {
  // TODO: Configure Nodemailer transport when EMAIL_* env vars are set
  if (!env.EMAIL_USER || !env.EMAIL_PASS) {
    console.log(`[Email] Would send to: ${to}, subject: ${subject}`);
    return;
  }

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: env.EMAIL_HOST,
    port: env.EMAIL_PORT,
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: env.EMAIL_USER,
    to,
    subject,
    html,
  });
};

module.exports = { sendEmail };
