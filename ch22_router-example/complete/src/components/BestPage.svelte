<script>
    import { bests } from '../store';
    import { afterUpdate } from 'svelte'; 
    import queryString from 'query-string';
    import Icon from '@iconify/svelte';
    
    export let id;

    const best = $bests[id - 1];
    const { name, price, descript, image, like } = best;

    let parsed = queryString.parse(window.location.search); 
    afterUpdate(() => {
        parsed = queryString.parse(window.location.search);
    });
</script>

<div class="bestpage">
    <img src={image} alt={name} />
    <div class="textwrap">
        <h4>
            {#if parsed.like === 'true'}
                <Icon icon="tdesign:heart-filled" />
            {/if}
            {name}
        </h4>
        <p>{descript}</p>
        <span>\ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        <button>신청하기</button>
    </div>
</div>