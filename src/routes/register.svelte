<script>
	import { auth } from '../utils/nhost';

	let name;
	let email;
	let password;

	function registerUser() {
		auth
			.register({
				email,
				password,
				options: {
					userData: {
						display_name: name
					}
				}
			})
			.then((data) => {
				console.log('data', data);
			});
	}
</script>

<form on:submit|preventDefault={registerUser}>
	<label>
		Name
		<input type="text" bind:value={name} />
	</label>
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
