<script>
    import Child04 from "./Child04.svelte";
</script>
<Child04 let:hovering={active}>
    <span class:active={active}>스벨트(Svelte)</span>
</Child04>
<Child04 let:hovering={active}>
    <span class:active={active}>리액트(React)</span>
</Child04>
<style>
    .active{
        background-color: #000;
        color: #fff;
        cursor: pointer;
    }
</style>