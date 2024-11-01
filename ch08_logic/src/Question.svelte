<script>
	let numbers = ['010','011','016','018','019'];
</script>

<select>
	{#each numbers as number}
		<option>{number}</option>
	{/each}
</select>