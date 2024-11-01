<script>
    import TopContainer from "../containers/TopContainer.svelte";
    export let id;
</script>

<TopContainer id={parseInt(id,10)} />