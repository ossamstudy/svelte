<script>
    import { setContext, getContext } from "svelte";
    import ContextFather from "./ContextFather.svelte";

    setContext('num',1);
    let num = getContext('num');
</script>

<div>
    <h1>Grand 구역</h1>
    <button on:click={() => num++}>1씩 증가</button>
    <p>기본 숫자 : { num }</p>
    <hr />
    <ContextFather />
</div>