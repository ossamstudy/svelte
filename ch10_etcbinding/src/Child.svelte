<script>
    export let childValue;
    const double = () => childValue *= 2;
</script>

<button on:click={double}>두 배 구하기</button>
<p>자손 값 : {childValue}</p>