<script>
    let current = 'first';
</script>

<button class:active={current === 'first'} on:click={() => current = 'first'}>첫 번째 버튼</button>
<button class:active={current === 'second'} on:click={() => current = 'second'}>두 번째 버튼</button>
<button class:active={current === 'third'} on:click={() => current = 'third'}>세 번째 버튼</button>

<style>
    button{
        border: none; border-radius: 5px; background-color: #ededed; 
        padding: 5px 20px; cursor: pointer;
    }
    button::after{ content: ' - 비활성'; }
    .active{
        background-color: cornflowerblue; color: white;
    }
    .active::after{ content: ' - 활성'; }
</style>