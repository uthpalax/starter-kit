<script>
	import { auth } from '../../utils/nhost';

	let oldPassword = '';
	let newPassword = '';

	function submit() {
		auth.changePassword(oldPassword, newPassword);
	}
</script>

<h3>Change password</h3>
<form on:submit|preventDefault={submit}>
	<label>
		Current Password
		<input type="password" bind:value={oldPassword} />
	</label>
	<label>
		New password
		<input type="password" bind:value={newPassword} />
	</label>
	<button type="submit">Change password </button>
</form>
