<script>
    import { fly } from 'svelte/transition';

    let visible = false;
    let status = '준비중...';
</script>

<p>status: {status}</p>

<label>
    <input type="checkbox" bind:checked={visible}> 보임
</label>

{#if visible}
    <p
        transition:fly|global="{{ y: 200, duration: 2000 }}"
        on:introstart="{() => status = '요소가 나타나기 시작~~'}"
        on:outrostart="{() => status = '요소가 사라지기 시작~~'}"
        on:introend="{() => status = '요소가 다 나타남!'}"
        on:outroend="{() => status = '요소가 다 사라짐!'}"
    >
        Svelte Transition Event
    </p>
{/if}