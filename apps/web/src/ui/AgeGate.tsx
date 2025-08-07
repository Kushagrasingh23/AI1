import { motion } from 'framer-motion';

export function AgeGate({ onConfirm }: { onConfirm: () => void }) {
  const confirm = () => {
    sessionStorage.setItem('age-ok', '1');
    onConfirm();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="neon-card p-6 w-full max-w-md text-center">
        <h2 className="font-semibold text-lg">Age Confirmation</h2>
        <p className="text-white/80 mt-2 text-sm">I confirm I’m 18+ and agree to view creator content.</p>
        <button onClick={confirm} className="neon-button mt-6">I’m 18+</button>
      </motion.div>
    </div>
  );
}