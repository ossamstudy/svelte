<script>
    let isInput01 = false;
    let isInput02 = false;

    const handleClick01 = () => {
        isInput01 = true;
    }
    const handleClick02 = () => {
        isInput02 = true;
    }

    const inputFocus = (node) => {
        node.focus();
    }
</script>

<button on:click={handleClick01}>첫 번째 입력 요소 활성</button>
{#if isInput01}
    <input type="text" placeholder="첫 번째" use:inputFocus />
{/if}
<hr />
<button on:click={handleClick02}>두 번째 입력 요소 활성</button>
{#if isInput02}
    <input type="text" placeholder="두 번째" use:inputFocus />
{/if}
