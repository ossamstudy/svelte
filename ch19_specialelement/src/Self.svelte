<script>
    export let count;
</script>

{#if count > 0}
    <p>카운트다운... {count}</p>
    <svelte:self count={count - 1} />
{:else}
    <p>발사!</p>
{/if}