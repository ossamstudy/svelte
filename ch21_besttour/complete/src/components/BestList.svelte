<script>
    import { bests } from '../store';
    import BestItem from './BestItem.svelte';
</script>

<ul>
    {#each $bests as best, index(best) }
        <BestItem {best} />
    {/each}
</ul>

