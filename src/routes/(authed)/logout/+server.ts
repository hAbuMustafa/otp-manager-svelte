import { redirect } from '@sveltejs/kit';

export function GET({ cookies, url }) {
	cookies.delete('session', {
		path: '/',
		secure: process.env.NODE_ENV === 'production'
	});

	const redirectTo = url.searchParams.get('redirectTo') || '/';

	return redirect(302, redirectTo);
}
