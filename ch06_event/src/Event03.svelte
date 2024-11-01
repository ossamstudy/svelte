<script>
    const handleClick01 = text => alert(`${ text } 클릭!`);
    const handleClick02 = text => alert(`${ text } 클릭!`);
</script>

<button on:click={() => handleClick01('1번')}>첫 번째 버튼</button>
<button on:click={() => handleClick02('2번')}>두 번째 버튼</button>