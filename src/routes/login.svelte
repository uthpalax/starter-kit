<script>
	import { goto } from '$app/navigation';
	import { auth } from '../utils/nhost';

	let email;
	let password;

	function submit() {
		auth
			.login({
				email,
				password
			})
			.then(() => {
				goto('/profile');
			});
	}
</script>

<form on:submit|preventDefault={submit}>
	<label>
		Email
		<input type="email" bind:value={email} />
	</label>
	<label>
		Password
		<input type="password" bind:value={password} />
	</label>
	<button type="submit">Register </button>
</form>
