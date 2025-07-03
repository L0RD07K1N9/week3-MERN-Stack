const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing (if using React Router)
app.get('/user/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
