<script lang="ts">
	import { page } from '$app/state';
	const { children } = $props();
	import './styles.css';
</script>

<svelte:head>
	<title>{page.data.title ? page.data.title + ' | ' : ''}OTP Manager</title>
</svelte:head>

<header>
	<nav>
		<a href="/">OTP Manager</a>
		{#if page.data.user}
			<ul>
				<li><a href="/account">Account</a></li>
				<li><a href="/logout">Logout</a></li>
			</ul>
		{:else}
			<ul>
				<li><a href="/register">Register</a></li>
				<li><a href="/login">Login</a></li>
			</ul>
		{/if}
	</nav>
</header>

<main>
	{#if page.data.title}
		<h1>{page.data.title}</h1>
	{/if}
	{@render children()}
</main>

<style>
	main {
		padding-block: 1rem 2rem;

		place-items: center;
	}
</style>
