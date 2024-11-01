<script>
    import { elasticOut } from 'svelte/easing';

    let items = [1, 2, 3];
    const shuffle = () => {
        items = items.sort(() => Math.random() - 0.5);
    }

    function spinFlip(node, { duration }){
        return {
            duration: 500,
            css: (t) => {
                const eased = elasticOut(t);
                return `
                    transform: scale(${eased}) rotate(${eased * 1080}deg);
                `;
            }
        }
    }
</script>



{#each items as item (item)}
    <div class="item" animate:spinFlip>
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