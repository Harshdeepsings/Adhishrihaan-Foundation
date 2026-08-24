const express = require('express');
const cors = require('cors');
const rateLimiter = require('./middlewares/rateLimit.middleware');
const errorMiddleware = require('./middlewares/error.middleware');

// Route imports
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const programRoutes = require('./routes/program.routes');
const galleryRoutes = require('./routes/gallery.routes');
const testimonialRoutes = require('./routes/testimonial.routes');
const contactRoutes = require('./routes/contact.routes');
const donationRoutes = require('./routes/donation.routes');

const app = express();

// --- Global Middlewares ---
app.use(cors());
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(rateLimiter);

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/donations', donationRoutes);

// Backward compatibility: /api/volunteer → /api/contact/volunteer
app.post('/api/volunteer', (req, res, next) => {
  req.url = '/api/contact/volunteer';
  app.handle(req, res, next);
});

// --- Health Check ---
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running.' });
});

// --- 404 Handler ---
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found.` });
});

// --- Global Error Handler ---
app.use(errorMiddleware);

module.exports = app;
