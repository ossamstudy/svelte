<script>
    import UpcomingContainer from "../containers/UpcomingContainer.svelte";
    export let id;
</script>

<UpcomingContainer id={parseInt(id,10)} />