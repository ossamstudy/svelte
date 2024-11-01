<script>
    import { onMount, onDestroy } from 'svelte'; 

    onMount(() => {
        console.log('onMount()실행');
    });

    onDestroy(() => {
        console.log('onDestroy()실행');
    });
</script>

<div>
    <h3>자손 컴포넌트</h3>
</div>