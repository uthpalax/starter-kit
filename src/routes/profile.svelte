<script>
	import { goto } from '$app/navigation';
	import { auth } from '../utils/nhost';
	import ProtectedRoute from '$lib/ProtectedRoute.svelte';
	import ChangePasswod from '$lib/forms/change-password.svelte';
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
	<ChangePasswod />
</ProtectedRoute>
