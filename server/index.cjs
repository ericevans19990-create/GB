const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple POST endpoint to receive form submissions in production/dev
app.post('/api/form', (req, res) => {
  const payload = req.body || {};
  // eslint-disable-next-line no-console
  console.log('[express-api] /api/form received:', payload);
  res.json({ ok: true, received: payload });
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'form api stub running' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Form API stub listening on http://localhost:${port}`);
});
