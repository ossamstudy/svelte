<script>
	let count = 1;
    
	const handleClick = () => count++;
</script>

<button on:click={handleClick}>
	클릭 수 : {count} {count === 1 ? 'time' : 'times' }
</button>