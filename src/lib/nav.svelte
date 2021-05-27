<script>
	import { page } from '$app/stores';
</script>

<nav class="space-x-10 py-4 border-b text-gray-700">
	<a sveltekit:prefetch class:underline={$page.path === '/'} class="hover:text-gray-900" href="/"
		>Home</a
	>
	<a sveltekit:prefetch class:underline={$page.path === '/about'} href="/about">About</a>
	<a sveltekit:prefetch class:underline={$page.path === '/profile'} href="/profile">Profile</a>
	<a sveltekit:prefetch class:underline={$page.path === '/register'} href="/register">Register</a>
	<a sveltekit:prefetch class:underline={$page.path === '/login'} href="/login">Login</a>
</nav>
