<script>
	import { page } from '$app/stores';
</script>

<nav class="space-x-10 py-4 border-b text-gray-700">
	<a class:underline={$page.path === '/'} class="hover:text-gray-900" sveltekit:prefetch href="/"
		>Home</a
	>
	<a
		class:underline={$page.path === '/profile'}
		class="hover:text-gray-900"
		sveltekit:prefetch
		href="/profile">Profile</a
	>
	<a
		class:underline={$page.path === '/register'}
		class="hover:text-gray-900"
		sveltekit:prefetch
		href="/register">Register</a
	>
	<a
		class:underline={$page.path === '/login'}
		class="hover:text-gray-900"
		sveltekit:prefetch
		href="/login">Login</a
	>
	<a
		class:underline={$page.path === '/forget-password'}
		class="hover:text-gray-900"
		sveltekit:prefetch
		href="/forget-password">Forget password</a
	>
</nav>
