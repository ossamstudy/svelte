<script>
    let text = '';
    let clicked = false;
    let validated = false;
    let inputRef;

    const onValidatedClick = () => {
        clicked = true;
        validated = text === '1234';
        if(!validated){
            inputRef.focus();
        }
    }
</script>

<form>
    <input
        type="password" bind:value={text}
        class={clicked && (validated ? 'success' : 'failure')}
        bind:this={inputRef}
    />
    <button
        type="submit"
        on:click|preventDefault={onValidatedClick}
    >검증하기</button>
</form>

<style>
    .success{ background-color: lightgreen; }
    .failure{ background-color: lightcoral; }
</style>