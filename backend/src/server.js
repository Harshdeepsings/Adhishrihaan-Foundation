const { PORT } = require('./config/env');
const connectDB = require('./config/db');
const app = require('./app');

const startServer = async () => {
  try {
    await connectDB();
    
    const server = app.listen(PORT, () => {
      console.log(`Express server is listening on port ${PORT}`);
    });

    // Handle unhandled promise rejections globally
    process.on('unhandledRejection', (err) => {
      console.error(`Unhandled Rejection: ${err.message}`);
      server.close(() => process.exit(1));
    });

  } catch (error) {
    console.error(`Application failed to start: ${error.message}`);
    process.exit(1);
  }
};

startServer();
