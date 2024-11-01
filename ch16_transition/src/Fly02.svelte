<script>
	import { fly } from 'svelte/transition';
	let visible = false;
</script>

<label>
	<input type="checkbox" bind:checked={visible} /> 보임
</label>

{#if visible}
	<p transition:fly|global={{ x: 200, y: 200 }}>Svelte Fly Effect</p>
{/if}

<style>
    p{ width: 100px; height: 100px; background-color: orange; }
</style>