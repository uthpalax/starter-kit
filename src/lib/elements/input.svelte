<script>
	export let name;
	export let label = '';
	export let type = 'text';
	export let value = '';
	export let placeholder = '';

	function handleInput(e) {
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	}
</script>

<div>
	<label class="block text-sm font-medium text-gray-700" for={name}> {label} </label>
	<div class="mt-1">
		<input
			class="block shadow-sm focus:ring-indigo-500 rounded-md w-full border-gray-300"
			{type}
			{value}
			{name}
			id={name}
			{placeholder}
			on:input={handleInput}
			{...$$restProps}
		/>
	</div>
</div>
