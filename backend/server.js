const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received Contact Form:', { name, email, message });
  res.status(200).json({ success: true, message: 'Message received successfully.' });
});

app.post('/api/volunteer', (req, res) => {
  const { firstName, lastName, email, phone, interest, reason } = req.body;
  console.log('Received Volunteer Form:', { firstName, lastName, email, phone, interest, reason });
  res.status(200).json({ success: true, message: 'Application received successfully.' });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
