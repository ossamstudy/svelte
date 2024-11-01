<script>
    import { bests } from '../store';
    import Icon from '@iconify/svelte';

    export let best;

    //props를 비구조화할당
    const { id, name, price, descript, image, like } = best;

    //스토어 이벤트 함수를 비구조화할당
    const { onToggle, onRemove } = bests;
</script>

<li>
    <a href="#!">
        <img src={image} alt={name} />
        <button class="likebox" on:click={() => onToggle(id)}>
            {#if like}
                <Icon icon="tdesign:heart-filled" />
            {:else}
                <Icon icon="tdesign:heart" />
            {/if}
        </button>
        <div class="box">
            <h4>{name}</h4>
            <h5>\ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
            <p>{descript}</p>
            <button on:click={() => onRemove(id)}>
                <Icon icon="gridicons:trash" />
            </button>
        </div>
    </a>
</li>