# Adhishrihaan Foundation

A pristine, fully-responsive web application for the [Adhishrihaan Foundation](https://adhishrihaan.org/). This project is built using a decoupled **MERN** architecture to provide a robust backend API and a fast, interactive frontend.

## Project Structure

The repository is divided into two separate applications:

1. **`/frontend`**: The Single Page Application (SPA) built with Vite and React. It handles all UI components, routing, and styling.
2. **`/backend`**: The Node.js Express server that exposes REST API endpoints for handling data (auth, contacts, programs, gallery).

## Tech Stack

### Frontend
- **Framework**: React (Vite)
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS + Custom CSS + Bootstrap 5

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT (jsonwebtoken) + bcryptjs
- **Validation**: Zod
- **File Uploads**: Multer + Cloudinary
- **Rate Limiting**: express-rate-limit

## Getting Started

To run this project locally, you will need to start both the frontend and backend servers.

### 1. Setup Backend

1. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Configure environment variables. Create a `.env` file in the `backend/` directory with the required variables (e.g., `PORT`, `MONGODB_URI`, `JWT_SECRET`, etc.).

3. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The backend API server will run on `http://localhost:5000` (or your configured port).*

### 2. Setup Frontend

1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   ```

2. Configure environment variables. Create a `.env` file in the `frontend/` directory with `VITE_API_BASE_URL=http://localhost:5000` (or your backend URL).

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on `http://localhost:5173`.*

## Features

- **Pixel-Perfect UI**: Fully responsive layouts matching the dark olive green aesthetic and modern typography.
- **Dynamic Content**: Data is served from a MongoDB database, allowing administrators to manage gallery images, programs, and testimonials.
- **Client-Side Routing**: Fast, seamless page transitions powered by React Router.
- **API Integration**: Complete REST API backend handling contact submissions, volunteer applications, and donations.

## API Routes Overview

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/contact/volunteer` | Submit volunteer application |
| CRUD | `/api/programs` | Manage programs |
| CRUD | `/api/gallery` | Manage gallery |
| CRUD | `/api/testimonials` | Manage testimonials |
| CRUD | `/api/donations` | Manage donations |

## Scripts

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start with nodemon (auto-reload)
- `npm run lint` - Run ESLint
