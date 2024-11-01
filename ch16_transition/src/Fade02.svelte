<script>
	import { fade } from 'svelte/transition';
    import { elasticInOut } from 'svelte/easing';
	let visible = false;
</script>

<label>
	<input type="checkbox" bind:checked={visible} /> 보임
</label>

{#if visible}
	<p transition:fade|global={{ 
        delay: 500, duration: 1000, easing: elasticInOut
    }}>Svelte Fade Effect</p>
{/if}

<style>
    p{ height: 100px; background-color: orange; }
</style>