import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

// Webhook endpoint example
app.post('/webhooks/stripe', express.raw({ type: 'application/json' }), (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-06-20' } as any);
  const sig = req.headers['stripe-signature'] as string;
  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET || '');
    console.log('Server Stripe event:', event.type);
    res.json({ received: true });
  } catch (err: any) {
    console.error(err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`Server listening on :${port}`));