import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-06-20' } as Stripe.StripeConfig);
  const sig = req.headers['stripe-signature'] as string;
  const chunks: Uint8Array[] = [];
  for await (const chunk of req) chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  const buf = Buffer.concat(chunks);

  try {
    const event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET || '');
    // Handle invoice.paid, checkout.session.completed etc.
    console.log('Stripe event:', event.type);
    res.json({ received: true });
  } catch (err: any) {
    console.error(err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
}