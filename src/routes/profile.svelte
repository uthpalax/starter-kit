<script>
	import ProtectedRoute from '$lib/ProtectedRoute.svelte';
	import ChangePasswodForm from '$lib/forms/change-password-form.svelte';
	import LogoutForm from '$lib/forms/logout-form.svelte';
</script>

<ProtectedRoute>
	<div class="flex justify-between">
		<h1 class="py-2">Profile page</h1>
		<LogoutForm />
	</div>

	<ChangePasswodForm />
</ProtectedRoute>
