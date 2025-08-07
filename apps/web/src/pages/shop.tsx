import Link from 'next/link';

export default function ShopPage() {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">Digital Shop</h1>
      <p className="text-white/80 mt-2">Downloadable wallpapers and packs.</p>
      <Link className="neon-button inline-block mt-6" href="/coming-soon">Explore</Link>
    </main>
  );
}