require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Health check route — confirms the server itself is alive,
// independent of DB connectivity (that comes in Phase 2).
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'shop-management',
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});