<script>
	import Input from '$lib/elements/input.svelte';
	import { auth } from '../../utils/nhost';

	let oldPassword = '';
	let newPassword = '';

	function submit() {
		auth.changePassword(oldPassword, newPassword);
	}
</script>

<h3>Change password</h3>
<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Current Password" name="oldPassword" type="password" bind:value={oldPassword} />
	<Input label="New password" name="newPassword" type="password" bind:value={newPassword} />
	<button type="submit">Change password </button>
</form>
