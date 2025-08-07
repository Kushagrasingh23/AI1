import Link from 'next/link';

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="neon-card p-10 text-center">
        <h1 className="text-2xl font-semibold">Coming Soon</h1>
        <p className="text-white/80 mt-2">Digital merchandise shop and full business notice will be available soon.</p>
        <Link className="neon-button inline-block mt-6" href="/">Back to Home</Link>
      </div>
    </main>
  );
}