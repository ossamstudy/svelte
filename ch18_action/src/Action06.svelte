<script>
    import {flip} from "svelte/animate";
    import {dndzone} from "svelte-dnd-action";
    let items = [
        {id: 1, name: "item1"},
        {id: 2, name: "item2"},
        {id: 3, name: "item3"},
        {id: 4, name: "item4"}
    ];
    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
    }
</script>

<section use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
    {#each items as item(item.id)}
        <div animate:flip="{{duration: flipDurationMs}}">{item.name}</div>
    {/each}
</section>

<style>
    section {
        width: 50%; padding: 0.3em;
        border: 1px solid black;
        overflow: scroll; height: 200px;
    }
    div {
        width: 50%; padding: 0.2em; margin: 0.15em 0;
        background-color: blue; color: white;
    }
</style>