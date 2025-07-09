export function load({ cookies }) {
	if (cookies.get('session')) {
		// fix: dummy data
		return {
			user: {
				name: 'John Doe',
				email: 'john@example.com'
			}
		};
	}
}
