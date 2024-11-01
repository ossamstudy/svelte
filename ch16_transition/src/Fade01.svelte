<script>
	import { fade } from 'svelte/transition';
	let visible = false;
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	보임
</label>

{#if visible}
	<p transition:fade|global>Svelte Fade Effect</p>
{/if}