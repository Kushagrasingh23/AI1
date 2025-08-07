import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message } = req.body as { message: string };
  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are NEON, a friendly futuristic anime idol.' },
        { role: 'user', content: message }
      ]
    });
    const reply = completion.choices[0]?.message?.content ?? '☆';
    res.json({ reply });
  } catch (e) {
    res.status(200).json({ reply: '☆' });
  }
}