<script>
    import { flip } from 'svelte/animate';

    let items = [1, 2, 3];
    const shuffle = () => {
        items = items.sort(() => Math.random() - 0.5);
    }
</script>



{#each items as item (item)}
    <div class="item" animate:flip>
        {item}
    </div>
{/each}
<hr />
<button on:click={shuffle}>순환</button>

<style>
    .item {
        padding: 10px; margin: 5px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        display: inline-block;
    }
</style>