<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher();

    const addAction = param => {
        dispatch('add', {
            value : param,
            message: param + ' 값 추가'
        });
    }
</script>
    
<button on:click={() => addAction(1)} >1씩 증가</button>
<button on:click={() => addAction(2)} >2씩 증가</button>