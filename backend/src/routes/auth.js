import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

// Yandex token exchange (placeholder implementation)
router.post('/yandex', async (req, res) => {
  const { code, redirect_uri } = req.body;
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    client_id: process.env.YANDEX_CLIENT_ID,
    client_secret: process.env.YANDEX_CLIENT_SECRET,
    redirect_uri: redirect_uri || process.env.YANDEX_REDIRECT_URI,
  });
  try {
    const response = await fetch('https://oauth.yandex.ru/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error_description || 'Yandex token exchange failed');
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// VK token exchange (placeholder)
router.post('/vk', async (req, res) => {
  // similar to Yandex, omitted for brevity
  res.status(501).json({ error: 'VK OAuth not implemented yet' });
});

// SBER token exchange (placeholder)
router.post('/sber', async (req, res) => {
  res.status(501).json({ error: 'SBER OAuth not implemented yet' });
});

// ЕСИА token exchange (placeholder)
router.post('/esia', async (req, res) => {
  res.status(501).json({ error: 'ЕСИА OAuth not implemented yet' });
});

export default router;
