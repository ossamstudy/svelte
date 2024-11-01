<script>
    let choice = 0;
    let borders = ['실선','점선','두줄'];
</script>

<h3>테두리 선택</h3>
{#each borders as border, i}
	<label>
		<input type="radio" bind:group={choice} value={i}>
		{ border }
	</label>
{/each}
<hr />
{#if choice === 0}
    <button class:borderSolid={true}>버튼</button>
{:else if choice === 1}
    <button class:borderDashed={true}>버튼</button>
{:else if choice === 2}
    <button class:borderDouble={true}>버튼</button>
{/if}


<style>
    button{
        border: none; border-radius: 5px; background-color: #ededed; 
        padding: 5px 20px; cursor: pointer;
    }
    .borderSolid{ border: 3px solid green; }
    .borderDashed{ border: 3px dashed green; }
    .borderDouble{ border: 3px double green; }
</style>