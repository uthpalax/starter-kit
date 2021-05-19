<script>
	import { goto } from '$app/navigation';
	import { auth } from '../utils/nhost';
	import ProtectedRoute from '$lib/ProtectedRoute.svelte';
	import ChangePasswodForm from '$lib/forms/change-password-form.svelte';
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
	<ChangePasswodForm />
</ProtectedRoute>
