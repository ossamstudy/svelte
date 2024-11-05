<script>
    import { buckets } from '../store';
    import Icon from '@iconify/svelte';
    import { v4 as uuidv4 } from 'uuid';

    let chkId = uuidv4();

    export let bucket;
    
    const { onToggle, onRemove, onEditMode, offEditMode, onEditItem } = buckets;

    const onEditKeyup = (e) => {
        if(e.keyCode === 13){
            onEditItem(bucket);
            offEditMode();
        }
    }
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
    {#if $buckets.editMode === bucket.id}
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