import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// In‑memory store for demo – replace with DB later
const consents = new Map();

router.post('/', (req, res) => {
  const { userId, consentGiven } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  const record = { id: uuidv4(), userId, consentGiven, timestamp: new Date().toISOString() };
  consents.set(userId, record);
  res.json(record);
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const record = consents.get(userId);
  if (!record) return res.status(404).json({ error: 'No consent found' });
  res.json(record);
});

export default router;
