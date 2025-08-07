import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.json({
    tiers: [
      { id: 'bronze', name: 'Bronze', price: 4.99, trialDays: 7 },
      { id: 'silver', name: 'Silver', price: 9.99, trialDays: 7 },
      { id: 'gold', name: 'Gold', price: 19.99, trialDays: 14 }
    ]
  });
}