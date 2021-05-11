<script>
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

<form on:submit|preventDefault={submit}>
	<label>
		New password
		<input type="password" bind:value={newPassword} />
	</label>
	<button type="submit">Reset password</button>
</form>
