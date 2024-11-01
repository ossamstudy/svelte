<script>
    import { fade } from 'svelte/transition';

    let visible = false;

    const handleMouseenter = () => (visible = true);
	const handleMouseleave = () => (visible = false);
</script>

<svelte:body on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave} />
{#if visible}
    <div class="centered" out:fade|global>
        {#each 'SVELTE' as char, i}
            <span in:fade|global={{ delay: i * 150, duration: 800 }}>{char}</span>
        {/each}
    </div>
{/if}

<style>
	.centered {
		font-size: 20vw; position: absolute;
		left: 50%; top: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Overpass';
		letter-spacing: 0.12em;
		color: #676778; font-weight: 400;
	}
	.centered span { will-change: filter; }
</style>