<script>
	import { passwordPAttern, usernamePattern } from '$lib/stores/patterns';
</script>

<form method="post">
	<label for="username">Username</label>
	<!-- svelte-ignore a11y_autofocus -->
	<input
		id="username"
		name="username"
		type="text"
		required
		pattern={usernamePattern.source}
		autofocus
		autocomplete="off"
		autocorrect="off"
		spellcheck="false"
	/>

	<label for="password">Password</label>
	<input
		id="password"
		name="password"
		type="password"
		required
		pattern={passwordPAttern.source}
		autocomplete="off"
		autocorrect="off"
		spellcheck="false"
	/>

	<input type="submit" value="Login" />
</form>

<style>
	form {
		width: 50vw;

		display: grid;
		grid-template-rows: repeat(4, 1fr) 2fr;
	}

	label {
		margin-block: 1rem 0.25rem;
	}

	input {
		border-radius: 4px;
		border: 1px solid light-dark(#333, #ccc);

		text-align: center;
	}

	input[type='submit'] {
		margin-block-start: 1rem;
		background-color: royalblue;
		color: light-dark(#ccc, #ccc);
		font-weight: 700;
		font-size: 1.25rem;
	}
</style>
