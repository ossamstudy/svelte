<script>
    import PropsFather from "./PropsFather.svelte";

    let num = 1;
</script>

<div>
    <h1>Grand 구역</h1>
    <button on:click={() => num++}>1씩 증가</button>
    <p>기본 숫자 : { num }</p>
    <hr />
    <PropsFather num={num} />
</div>