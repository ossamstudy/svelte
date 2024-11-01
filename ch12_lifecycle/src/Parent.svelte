<script>
    import Child from "./Child.svelte";

    let isChildElementView = false;

    const handleClick = (bool) => {
        isChildElementView = bool;
    }
</script>

<h2>부모 컴포넌트</h2>
<button on:click={() => handleClick(true)}>
    Child 컴포넌트 활성화
</button>
<button on:click={() => handleClick(false)}>
    Child 컴포넌트 비활성화
</button>
<hr />
{#if isChildElementView}
  <Child />
{/if}