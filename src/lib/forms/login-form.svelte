<script>
	import { goto } from '$app/navigation';
	import Input from '$lib/elements/input.svelte';
	import { auth } from '../../utils/nhost';

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

<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Email" name="email" type="email" bind:value={email} />
	<Input label="Password" name="password" type="password" bind:value={password} />
	<button type="submit">Login </button>
</form>
