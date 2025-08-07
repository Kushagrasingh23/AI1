import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const PostEditor = dynamic(() => import('@/ui/PostEditor'), { ssr: false });

export default function DashboardPage() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <main className="container mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Creator Dashboard</h1>
        <Link className="link" href="/feed">Go to Feed</Link>
      </div>

      <section className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="neon-card p-6">
          <h2 className="font-semibold text-neon.pink">Profile</h2>
          <div className="mt-3 text-sm text-white/80">
            <div>Name: {session?.user?.name ?? 'Your Idol'}</div>
            <div>Email: {session?.user?.email ?? '—'}</div>
            <div className="mt-3">Bio: Futuristic AI anime idol <span className="text-neon.cyan">NEON</span>.</div>
          </div>
          <button className="neon-button mt-4">Edit Character</button>
        </div>

        <div className="neon-card p-6 col-span-2">
          <h2 className="font-semibold text-neon.pink">Analytics</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { t: 'Subscribers', v: '1,248' },
              { t: 'Monthly Revenue', v: '$7,420' },
              { t: 'Top Post', v: 'Cyber Night Live' }
            ].map((a) => (
              <motion.div key={a.t} whileHover={{ y: -3 }} className="neon-card p-4">
                <div className="text-white/60 text-xs uppercase">{a.t}</div>
                <div className="text-xl mt-1">{a.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <button className="neon-button" onClick={() => setOpen(true)}>Create New Post</button>
        {open && <PostEditor onClose={() => setOpen(false)} />}
      </section>
    </main>
  );
}