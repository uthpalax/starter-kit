<script>
	import Nav from '$lib/nav.svelte';
	import '../app.postcss';
</script>

<main class="container mx-auto">
	<Nav />
	<div class="py-4">
		<slot />
	</div>
</main>
