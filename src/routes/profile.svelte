<script>
	import { goto } from '$app/navigation';

	import ProtectedRoute from '$lib/ProtectedRoute.svelte';
	import { auth } from '../utils/nhost';
</script>

<ProtectedRoute>
	<h1>Profile page</h1>
	<button
		on:click={() => {
			auth.logout().then(() => {
				goto('/');
			});
		}}>Logout</button
	>
</ProtectedRoute>
