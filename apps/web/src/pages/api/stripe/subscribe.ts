import type { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-06-20' } as any);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { priceId } = req.body as { priceId: string };
  // Stub: return a placeholder URL
  res.json({ url: 'https://checkout.stripe.com/pay/cs_test_stub' });
}