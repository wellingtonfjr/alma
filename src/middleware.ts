import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { COOKIES } from '@/utils/cookies';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookieStore = cookies();
  const authCookie = (await cookieStore).get(COOKIES.AUTH_COOKIE);
  if (!authCookie) {
    const redirectUrl = new URL('/login', request.url);
    const response = NextResponse.redirect(redirectUrl);
    return response;
  }
  return response;
}

export const config = {
  matcher: [
    '/leads-list',
  ],
};
