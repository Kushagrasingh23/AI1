import { useEffect, useState } from 'react';

export function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ok = localStorage.getItem('gdpr-ok');
    setShow(!ok);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 neon-card px-4 py-3 w-[95%] max-w-2xl text-sm flex items-center justify-between gap-3">
      <div>
        We use cookies for authentication, analytics and payments. Read our <span className="underline underline-offset-4"><a href="/privacy">Privacy Policy</a></span>.
      </div>
      <button
        className="neon-button"
        onClick={() => {
          localStorage.setItem('gdpr-ok', '1');
          setShow(false);
        }}
      >
        Accept
      </button>
    </div>
  );
}