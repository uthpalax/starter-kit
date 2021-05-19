<script>
	import Input from '$lib/elements/input.svelte';
	import { auth } from '../../utils/nhost';

	let error;
	let email = '';

	function submit() {
		auth.requestPasswordChange(email).catch((e) => {
			error = e.response.data;
		});
	}
</script>

<h1>Forget password</h1>
{#if error}
	<p class="text-red-400 py-2">{error.message}</p>
{/if}
<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Email" name="email" type="email" bind:value={email} />
	<button type="submit">Forget password</button>
</form>
