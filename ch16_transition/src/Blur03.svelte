<script>
	import { blur } from 'svelte/transition';
	let visible = false;
</script>

<label>
	<input type="checkbox" bind:checked={visible} /> 보임
</label>

{#if visible}
	<p
        in:blur={{ amount: 20 }}
        out:blur={{ amount: 0 }}
    >Svelte Blur Effect</p>
{/if}

<style>
    p{ height: 100px; background-color: orange; }
</style>