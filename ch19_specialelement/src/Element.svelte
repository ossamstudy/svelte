<script>
	const options = ['h1', 'h3', 'p'];
	let selected = options[0];
</script>

<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<svelte:element this={selected}>현재 요소는 {selected} 태그입니다.</svelte:element>
