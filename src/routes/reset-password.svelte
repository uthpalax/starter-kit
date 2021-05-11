<script>
	import { page } from '$app/stores';
	import ResetPassword from '$lib/forms/reset-password.svelte';

	console.log('$page', $page.query.get('ticket'));
</script>

<ResetPassword ticket={$page.query.get('ticket')} />
