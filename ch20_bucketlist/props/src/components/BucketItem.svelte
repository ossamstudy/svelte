<script>
    import Icon from '@iconify/svelte';
    import { v4 as uuidv4 } from 'uuid';

    //input 태그의 id 속성과 label 태그의 for 속성이 같이 사용할 id 처리
    let chkId = uuidv4();

    export let bucket;
    export let onToggle;
    export let onRemove;
    export let editMode;
    export let onEditMode;
    export let onEditKeyup;
</script>

<div class="bucketitem">
    <input 
        type="checkbox" id={chkId}
        bind:checked={bucket.chk}
    />
    <label 
        for={chkId} class="checkcircle"
        on:click={() => onToggle(bucket.id)}
        on:keydown={() => onToggle(bucket.id)}
        role="presentation"
    >
        <Icon icon="ic:round-check" />
    </label>
    {#if editMode === bucket.id}
        <input 
            type="text"
            bind:value={bucket.text}
            on:keyup={(e) => onEditKeyup(e, bucket)}
        />
    {:else}
        <p on:dblclick={() => onEditMode(bucket.id)}>{bucket.text}</p>
    {/if}
    <button 
        class="remove"
        on:click={() => onRemove(bucket.id)}
    >
        <Icon icon="gridicons:trash" />
    </button>
</div>