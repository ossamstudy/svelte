<script>
	let foods = ['떡볶이','순대','오뎅','튀김'];
    let selected = '';
</script>

<h3>OSSAM 분식</h3>
<select multiple bind:value={selected}>
	{#each foods as food}
		<option value={food}>{ food }</option>
	{/each}
</select>
{#if selected.length === 0}
    <p>주문하실 메뉴를 선택해 주세요.</p>
{:else}
    <p>선택 메뉴 : {selected}</p>
{/if}