<script>
    import DispatchParent from "./DispatchParent.svelte";

    let num = 0;

    const handleValueAdd = e => {
        console.log(e.detail.message);
        num = num + e.detail.value;
    }
</script>

<p>num : {num}</p> 

<DispatchParent on:add={handleValueAdd}  />