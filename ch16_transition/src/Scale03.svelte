<script>
	import { scale } from 'svelte/transition';
	let visible = false;
</script>

<label>
	<input type="checkbox" bind:checked={visible} /> 보임
</label>

{#if visible}
	<p
        in:scale={{ start: 0 }}
        out:scale={{ start: 0.5 }}
    >Svelte Scale Effect</p>
{/if}

<style>
    p{ height: 100px; background-color: orange; }
</style>