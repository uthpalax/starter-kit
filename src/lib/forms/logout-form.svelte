<script>
	import { goto } from '$app/navigation';
	import { auth } from '../../utils/nhost';

	function submit() {
		auth.logout().then(() => {
			goto('/');
		});
	}
</script>

<form class="space-y-2 py-2" on:submit|preventDefault={submit}>
	<button class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm" type="submit"
		>Logout
	</button>
</form>
