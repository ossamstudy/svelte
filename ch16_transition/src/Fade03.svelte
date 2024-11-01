<script>
	import { fade } from 'svelte/transition';
	let visible = false;
</script>

<label>
	<input type="checkbox" bind:checked={visible} /> 보임
</label>

{#if visible}
	<p 
        in:fade|global={{ duration: 400 }}
        out:fade|global={{ duration: 0 }}
    >Svelte Fade Effect</p>
{/if}

<style>
    p{ height: 100px; background-color: orange; }
</style>