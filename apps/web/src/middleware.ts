import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  if (url.pathname.startsWith('/dashboard') || url.pathname.startsWith('/feed')) {
    // Placeholder: in real app, check session cookie/JWT
    // Allow by default in scaffold
    return NextResponse.next();
  }
  return NextResponse.next();
}