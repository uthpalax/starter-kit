<script>
	import { auth } from '../../utils/nhost';
	import Input from '$lib/elements/input.svelte';

	let name;
	let email;
	let password;

	function submit() {
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

<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Name" type="text" bind:value={name} />
	<Input label="Email" type="email" bind:value={email} />
	<Input label="Password" type="password" bind:value={password} />
	<button type="submit">Register </button>
</form>
