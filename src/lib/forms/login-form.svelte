<script>
	import { goto } from '$app/navigation';
	import Input from '$lib/elements/input.svelte';
	import { auth } from '../../utils/nhost';

	let error;
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
			})
			.catch((e) => {
				error = e.response.data;
			});
	}
</script>

{#if error}
	<p class="text-red-400 py-2">{error.message}</p>
{/if}
<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Email" name="email" type="email" bind:value={email} required />
	<Input label="Password" name="password" type="password" bind:value={password} required />
	<button type="submit">Login </button>
</form>
