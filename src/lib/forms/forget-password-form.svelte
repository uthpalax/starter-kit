<script>
	import Input from '$lib/elements/input.svelte';
	import { auth } from '../../utils/nhost';

	let email = '';
	function submit() {
		auth.requestPasswordChange(email);
	}
</script>

<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Email" name="email" type="email" bind:value={email} />
	<button type="submit">Forget password</button>
</form>
