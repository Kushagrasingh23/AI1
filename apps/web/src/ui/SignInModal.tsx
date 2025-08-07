import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';

export function SignInModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await signIn('email', { email, redirect: false });
      if (res?.error) setError(res.error);
      else onClose();
    } catch (err) {
      setError('Unexpected error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="neon-card p-6 w-full max-w-md">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Sign in</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
        </div>
        <div className="mt-4 grid gap-3">
          <button className="neon-button" onClick={() => signIn('google')}>Continue with Google</button>
          <button className="neon-button" onClick={() => signIn('twitter')}>Continue with Twitter</button>
        </div>
        <div className="my-4 text-center text-white/60 text-xs">or</div>
        <form onSubmit={handleEmail} className="grid gap-3">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/5 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neon.cyan"
          />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button type="submit" className="neon-button">Send magic link</button>
        </form>
      </motion.div>
    </div>
  );
}