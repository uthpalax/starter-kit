<script>
	import { auth } from '../../utils/nhost';

	let email = '';
	function forgetPassword() {
		auth.requestPasswordChange(email);
	}
</script>

<form on:submit|preventDefault={forgetPassword}>
	<label>
		Email
		<input type="email" bind:value={email} />
	</label>
	<button type="submit">Forget password</button>
</form>
