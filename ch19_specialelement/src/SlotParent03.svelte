<script>
    import Child03 from "./Child03.svelte";
</script>

<Child03>
    <svelte:fragment slot="name">스벨트(Svelte)</svelte:fragment>
    <svelte:fragment slot="release">2016</svelte:fragment>
</Child03>

<Child03>
    <svelte:fragment slot="name">리액트(React)</svelte:fragment>
    <svelte:fragment slot="release">2013</svelte:fragment>
</Child03>
<Child03></Child03>
