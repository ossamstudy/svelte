<script>
    import PopularContainer from "../containers/PopularContainer.svelte";
    export let id;
</script>

<PopularContainer id={parseInt(id,10)} />