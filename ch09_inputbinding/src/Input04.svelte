<script>
	let choiceSize = 0;
	let sizes = ['Tall','Grande','Venti'];
</script>

<h3>사이즈 선택</h3>
{#each sizes as size, i}
	<label>
		<input type="radio" bind:group={choiceSize} value={i}>
		{ size }
	</label>
{/each}

<p>고객님은 {sizes[choiceSize]}를 선택하셨습니다.</p>