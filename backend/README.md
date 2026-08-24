# Adhishrihaan Foundation — Backend

Node.js + Express + MongoDB backend for the Adhishrihaan Foundation website.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT (jsonwebtoken) + bcryptjs
- **Validation**: Zod
- **File Uploads**: Multer + Cloudinary
- **Rate Limiting**: express-rate-limit

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start with nodemon (auto-reload) |

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/volunteer` | Submit volunteer application |
| CRUD | `/api/programs` | Manage programs |
| CRUD | `/api/gallery` | Manage gallery |
| CRUD | `/api/testimonials` | Manage testimonials |
| CRUD | `/api/donations` | Manage donations |
