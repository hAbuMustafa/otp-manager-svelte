import { passwordPAttern, usernamePattern } from '$lib/stores/patterns';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export function load() {
	return {
		title: 'Login'
	};
}

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (!username || !password) {
			return fail(400, {
				message: 'Username and password are required'
			});
		}

		if (
			!usernamePattern.test(username as string) ||
			!passwordPAttern.test(password as string)
		) {
			return fail(400, {
				message: 'Invalid username or password'
			});
		}

		// fix: dummy session cookie
		cookies.set('session', '1234567890', {
			path: '/',
			maxAge: 60 * 60 * 24 * 7, // 7 days
			sameSite: 'lax', // recommended for CSRF protection
			httpOnly: true, // prevents client-side JS from accessing the cookie
			secure: process.env.NODE_ENV === 'production' // only send over HTTPS in production
		});

		throw redirect(303, '/');
	}
};
