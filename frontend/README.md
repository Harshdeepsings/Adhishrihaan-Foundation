# Adhishrihaan Foundation Clone

A pristine, fully-responsive web application clone of the [Adhishrihaan Foundation](https://adhishrihaan.org/) website. This project was built to replicate the exact design, layouts, and philanthropic ethos of the original site.

## Tech Stack

This project strictly adheres to a decoupled **MERN** architecture:

*   **Frontend**: React, Vite, React Router DOM
*   **Backend**: Node.js, Express.js
*   **Styling**: Bootstrap 5, Tailwind CSS, Custom CSS

## Project Structure

The repository is divided into two separate applications:

1.  **`/frontend`**: The Single Page Application (SPA) built with Vite and React. It handles all UI components, routing, and styling.
2.  **`/backend`**: The Node.js Express server that exposes REST API endpoints for handling form submissions (Contact Us and Volunteer applications).

## Getting Started

To run this project locally, you will need to run both the frontend and backend servers concurrently.

### 1. Start the Backend Server

```bash
cd backend
npm install
node server.js
```
*The backend API server will run on `http://localhost:5000`.*

### 2. Start the Frontend Server

Open a new terminal window:

```bash
cd frontend
npm install
npm run dev
```
*The Vite development server will run on `http://localhost:5173`.*

## Features

*   **Pixel-Perfect UI**: Cloned the dark olive green aesthetic, typography (Inter & Playfair Display), and responsive grid layouts.
*   **Dynamic Carousel**: Features a horizontal-sliding hero carousel pulling high-resolution images.
*   **Client-Side Routing**: Fast, seamless page transitions powered by React Router.
*   **API Integration**: Contact and volunteer forms are wired up to send POST requests directly to the backend Express API.
