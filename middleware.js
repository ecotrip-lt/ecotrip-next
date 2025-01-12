import { NextResponse } from 'next/server';

export function middleware(request) {
	const url = request.nextUrl.clone();
	if (url.pathname === '/') {
		url.pathname = '/form';
		return NextResponse.redirect(url);
	}
	return NextResponse.next();
}

export const config = {
	matcher: '/',
};
