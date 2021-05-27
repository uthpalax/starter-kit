<script>
	import Input from '$lib/elements/input.svelte';
	import { auth } from '../../utils/nhost';

	let oldPassword = '';
	let newPassword = '';
	let error;

	function submit() {
		auth.changePassword(oldPassword, newPassword).catch((e) => {
			error = e.response.data;
		});
	}
</script>

<h1>Change password</h1>
{#if error}
	<p class="text-red-400 py-2">{error.message}</p>
{/if}
<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Current Password" name="oldPassword" type="password" bind:value={oldPassword} />
	<Input label="New password" name="newPassword" type="password" bind:value={newPassword} />
	<button class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm" type="submit"
		>Change password
	</button>
</form>
