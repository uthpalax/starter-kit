<script>
	import Input from '$lib/elements/input.svelte';
	import { auth } from '../../utils/nhost';

	export let ticket;
	let newPassword;

	function submit() {
		auth.confirmPasswordChange(newPassword, ticket).then(() => {
			console.log('You have reset the password');
		});
	}
</script>

<h1>Reset password</h1>

<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="New password" name="newPassword" type="password" bind:value={newPassword} />
	<button type="submit">Reset password</button>
</form>
