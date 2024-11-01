<svelte:options immutable={true}/>

<script>
    import { afterUpdate } from 'svelte';

    export let lang;

    afterUpdate(() => {
        console.log(lang.text + ' : ' + lang.like);
    });
</script>

<button on:click>
    {#if lang.like}
        <span>♥</span>
    {:else}
        <span>♡</span>
    {/if}
    {lang.text}
</button>