<script>
	let weekdays = ['일','월','화','수','목','금','토'];
</script>

<select>
	{#each weekdays as weekday}
		<option>{weekday}요일</option>
	{/each}
</select>