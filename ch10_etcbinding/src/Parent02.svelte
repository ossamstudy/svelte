<script>
    import Child from "./Child.svelte";
    let parentValue = 1;
</script>

<Child bind:childValue={parentValue} />
<p>부모 값 : {parentValue}</p>