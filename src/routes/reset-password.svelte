<script>
	import { page } from '$app/stores';
	import ResetPasswordForm from '$lib/forms/reset-password-form.svelte';
</script>

<ResetPasswordForm ticket={$page.query.get('ticket')} />
