<script>
	import { goto } from '$app/navigation';
	import { auth } from '../utils/nhost';
	import { onMount } from 'svelte';

	let isLoading = true;

	onMount(async () => {
		const isAuthenticated = await auth.isAuthenticatedAsync();
		if (isAuthenticated) {
			isLoading = false;
		} else {
			goto('/login');
		}
	});
</script>

{#if isLoading}
	<p>Loading</p>
{:else}
	<slot />
{/if}
