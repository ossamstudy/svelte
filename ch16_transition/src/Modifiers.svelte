<script>
    import { slide } from 'svelte/transition';

    let showItems = true;
    let i = 5;
    let items = ['첫', '두', '세', '네', '다섯'];
</script>

<label>
    <input type="checkbox" bind:checked={showItems}> 전부 보이게 처리
</label>

<label>
    <input type="range" bind:value={i} max=5>
</label>

{#if showItems}
    {#each items.slice(0, i) as item}
        <div transition:slide|local>
            {item}번째 리스트
        </div>
    {/each}
{/if}

<style>
    div{ padding: 15px 0; border-top: 1px solid #ccc; }
    div:last-child{ border-bottom: 1px solid #ccc; }
</style>