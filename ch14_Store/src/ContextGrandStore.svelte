<script>
    import { writable } from "svelte/store";
    import { setContext } from "svelte";
    import ContextFatherStore from "./ContextFatherStore.svelte";

    let num = writable(1);

    setContext('num',num);
</script>

<div>
    <h1>Grand 구역</h1>
    <button on:click={() => $num++}>1씩 증가</button>
    <p>기본 숫자 : { $num }</p>
    <hr />
    <ContextFatherStore />
</div>