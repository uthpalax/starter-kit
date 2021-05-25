<script>
	import { goto } from '$app/navigation';
	import { auth } from '../../utils/nhost';
	import Input from '$lib/elements/input.svelte';

	let error;
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
			.then(() => {
				goto('/profile');
			})
			.catch((e) => {
				error = e.response.data;
			});
	}
</script>

<h1>Register</h1>
{#if error}
	<p class="text-red-400 py-2">{error.message}</p>
{/if}
<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Name" name="name" type="text" bind:value={name} />
	<Input label="Email" name="email" type="email" bind:value={email} />
	<Input label="Password" name="password" type="password" bind:value={password} />
	<button type="submit">Register </button>
</form>
