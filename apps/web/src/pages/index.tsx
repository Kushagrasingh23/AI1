import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SignInModal } from '@/ui/SignInModal';
import { AgeGate } from '@/ui/AgeGate';
import { ConsentBanner } from '@/ui/ConsentBanner';

const sampleAvatars = [
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600267175164-c7b8a0b2f92e?q=80&w=800&auto=format&fit=crop'
];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [showAgeGate, setShowAgeGate] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ageOk = sessionStorage.getItem('age-ok');
      setShowAgeGate(!ageOk);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <header className="p-6 flex items-center justify-between">
        <div className="font-press text-neon.cyan text-sm">NEON AI Idol</div>
        <nav className="flex gap-6 text-sm">
          <Link className="link" href="#features">Features</Link>
          <Link className="link" href="/privacy">Privacy</Link>
          <button className="neon-button" onClick={() => setOpen(true)}>Get Started</button>
        </nav>
      </header>

      <section className="flex-1 container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Become an AI Anime Idol
          </motion.h1>
          <p className="mt-6 text-white/80 max-w-xl">
            Launch your anime-style AI influencer with subscriptions, exclusive content, and a built-in chatbot.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="neon-button" onClick={() => setOpen(true)}>Get Started</button>
            <Link href="#features" className="link">Learn more</Link>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 gap-4">
            {sampleAvatars.map((src, idx) => (
              <motion.div
                whileHover={{ rotate: 1, scale: 1.03 }}
                key={idx}
                className="neon-card overflow-hidden"
              >
                <Image src={src} alt={`avatar-${idx}`} width={400} height={400} className="w-full h-40 object-cover" />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-white/60">AI-generated sample avatars</span>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 container mx-auto px-6 grid md:grid-cols-3 gap-6">
        {[
          { t: 'OAuth + Email Auth', d: 'Sign in with Google, Twitter, or email with polished UX.' },
          { t: 'Creator Dashboard', d: 'Analytics, post editor with images/videos/GIFs.' },
          { t: 'Subscriber Feed', d: 'Masonry grid, chatbot widget, Stripe tipping.' }
        ].map((f) => (
          <motion.div key={f.t} whileHover={{ y: -4 }} className="neon-card p-6">
            <h3 className="font-semibold text-neon.pink">{f.t}</h3>
            <p className="text-white/80 mt-2 text-sm">{f.d}</p>
          </motion.div>
        ))}
      </section>

      <footer className="py-10 text-center text-sm text-white/60">
        <div className="mb-2">
          <Link href="/privacy" className="link">Privacy Policy</Link> · <Link href="/coming-soon" className="link">Business (CEIDG)</Link>
        </div>
        <div>© {new Date().getFullYear()} NEON AI Idol</div>
      </footer>

      <AnimatePresence>
        {open && <SignInModal onClose={() => setOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {showAgeGate && <AgeGate onConfirm={() => setShowAgeGate(false)} />}
      </AnimatePresence>

      <ConsentBanner />
    </main>
  );
}