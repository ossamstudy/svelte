<script>
    import NowContainer from "../containers/NowContainer.svelte";
    export let id;
</script>

<NowContainer id={parseInt(id,10)} />