import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';

const posts = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Exclusive Drop #${i + 1}`,
  image: `https://picsum.photos/seed/${i + 10}/600/400`,
  price: i % 3 === 0 ? 3.99 : null
}));

export default function FeedPage() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  const sendMessage = async () => {
    setChat((c) => [...c, `You: ${message}`]);
    setMessage('');
    try {
      const res = await axios.post('/api/chat', { message });
      setChat((c) => [...c, `NEON: ${res.data.reply}`]);
    } catch {
      setChat((c) => [...c, 'NEON: ...']);
    }
  };

  const tip = async (postId: number) => {
    await axios.post('/api/stripe/tip', { postId });
    alert('Stripe checkout link would open (stub).');
  };

  return (
    <main className="container mx-auto px-6 py-8 grid md:grid-cols-4 gap-6">
      <section className="md:col-span-3 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {posts.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
            className="neon-card p-3 break-inside-avoid"
          >
            <img src={p.image} alt={p.title} className="rounded mb-2" />
            <div className="flex items-center justify-between">
              <div className="font-semibold">{p.title}</div>
              <div className="flex items-center gap-2">
                <button className="neon-button" onClick={() => tip(p.id)}>Tip</button>
                {p.price && <button className="neon-button">Unlock ${p.price}</button>}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <aside className="neon-card p-4 h-fit sticky top-6">
        <h3 className="font-semibold text-neon.pink">Chat with NEON</h3>
        <div className="h-64 overflow-auto mt-3 space-y-2 text-sm">
          {chat.map((c, i) => (
            <div key={i} className="bg-white/5 p-2 rounded">{c}</div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white/5 border border-white/10 rounded px-3 py-2 w-full"
            placeholder="Type a message"
          />
          <button className="neon-button" onClick={sendMessage}>Send</button>
        </div>
      </aside>
    </main>
  );
}