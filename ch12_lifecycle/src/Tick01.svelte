<script>
    let isElementView = false;
    let input;

    const handleClick = (param) => {
        isElementView = param;
        if(isElementView === true) {
            input.focus();
        }
    }
</script>

<button on:click={() => handleClick(true)}>input 활성화</button>
<button on:click={() => handleClick(false)}>input 비활성화</button>
{#if isElementView}
    <div>
        <input type="text" bind:this={input} />
    </div>
{/if}