import { NextResponse } from 'next/server';

const landingRoutes = ['/', '/continue', '/start'];
const appRoutes = ['/home', '/write', '/profile', '/journey', '/reflect'];

export default function middleware(req) {
  const hasAuthCookie = req.cookies.has('heliosAuth');
  const { pathname } = req.nextUrl;
  let response = NextResponse.next();

  if (appRoutes.includes(pathname)) {
    if (!hasAuthCookie) {
      const url = req.nextUrl.clone();
      url.pathname = '/';
      response = NextResponse.redirect(url);
    }
  } else if (landingRoutes.includes(pathname)) {
    if (hasAuthCookie) {
      const url = req.nextUrl.clone();
      url.pathname = '/home';
      response = NextResponse.redirect(url);
    }
  }

  return response;
}
